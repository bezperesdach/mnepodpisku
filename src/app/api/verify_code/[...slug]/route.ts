import { google } from "googleapis";
import moment from "moment";

export type VerifyCodeResponse = {
  codeFound: boolean;
  robloxCode: string;
};

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug[0];

  const foundCode = { codeFound: false, robloxCode: "" };

  if (!slug) {
    return Response.json(foundCode);
  }

  const private_key = process.env.PRIVATE_KEY;

  const client_email = process.env.CLIENT_EMAIL;

  // СКОПИРОВАТЬ ID ТАБЛИЦЫ, ПЕРЕД ЭТИМ ДОБАВИТЬ google-sheets-wb@wbtabledata.iam.gserviceaccount.com ПОЛЬЗОВАТЕЛЯ КАК РЕДАКТОРА В ТАБЛИЦУ
  const spreadsheetId = process.env.SPREADSHEET_ID;

  // Authenticate with Google Sheets API
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email, private_key },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const sheets = google.sheets({ version: "v4", auth });

  if (!slug.startsWith("R")) {
    return Response.json(foundCode);
  }

  const sheetsResponse = await sheets.spreadsheets.get({
    spreadsheetId,
  });

  // Find the sheet with name "Аккаунт"
  const sheet = sheetsResponse.data.sheets?.find((sheet) => sheet.properties?.title === "Roblox");

  if (!sheet) {
    return Response.json(foundCode);
  }

  const range = `${sheet.properties?.title}!A2:D`;

  const valuesResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const values = valuesResponse.data.values ?? [];

  const foundValue = { value: [], index: -1 };

  const formattedDate = Intl.DateTimeFormat("ru-RU", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour12: false, // setting 24 hour format
  }).format();

  const todayStart = moment().startOf("day");

  for (let i = 0; i < values?.length; i++) {
    if (values[i][0] === slug) {
      if (values[i][3] && values[i][3] !== "") {
        if (!moment(todayStart, "DD.MM.YYYY").isAfter(moment(values[i][2], "DD.MM.YYYY"), "week")) {
          foundCode.robloxCode = values[i][3];
          foundCode.codeFound = true;
          foundValue.value = values[i] as any;
          foundValue.index = i;
          break;
        }
      }
    }
  }

  if (foundCode.codeFound) {
    const values = [foundValue.value[0], true, formattedDate, foundValue.value[3]];

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Roblox!A${foundValue.index + 2}`,
      valueInputOption: "USER_ENTERED",
      includeValuesInResponse: true,
      requestBody: {
        values: [values],
      },
    });
  }

  return Response.json(foundCode);
}
