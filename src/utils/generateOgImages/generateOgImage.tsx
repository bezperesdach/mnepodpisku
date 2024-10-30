/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use server";

import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

import * as fs from "node:fs/promises";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { join } from "path";
import satori from "satori";
import { URL } from "url";
const { Resvg } = require("@resvg/resvg-js");

async function pngToBase64(filePath: string) {
  // Read the PNG file
  const pngData = await fs.readFile(filePath);

  // Convert the PNG data to Base64
  const base64String = Buffer.from(pngData).toString("base64");

  return base64String;
}

// console.log(process.env);
const basePath = join(process.env.basePath!);

const scriptPath = join(basePath, "src", "utils", "generateOgImages");
// const logo = baseUrl + "/VK_logo.png";

type Props = {
  path?: string | URL;
  title?: string;
  text?: string | TemplateString;
};

async function createDirectory(directory: string) {
  try {
    await fs.mkdir(directory, { recursive: true });
  } catch (err: any) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
}

async function writeFile(directory: string, filename: string, buffer: any) {
  try {
    await createDirectory(directory);
    await fs.writeFile(join(directory, filename), buffer);
  } catch (err: any) {
    console.error("Error writing file:", err);
  }
}

export async function generateOgImage({ path, title = "MNEPODPISKU.RU", text }: Props) {
  if (typeof path !== "string") {
    throw new Error("Path is missing");
  }
  if (typeof text !== "string") {
    if (typeof path === "string") {
      throw new Error(`Text is missing for ${path}`);
    } else {
      throw new Error("Text is missing");
    }
  }

  const fontNormal = await fs.readFile(join(scriptPath, "Inter-Regular.ttf"));
  const fontBold = await fs.readFile(join(scriptPath, "Inter-Black.ttf"));

  const logoBase64 = await pngToBase64(join(basePath, "public", "VK_logo.png"));

  const svg = await satori(
    <div
      style={{
        fontFamily: "Inter",
        color: "#fff",
        background: "#000",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div style={{ display: "flex", width: "38%", justifyContent: "flex-end" }}>
        <img src={`data:image/png;base64,${logoBase64}`} width={460} height={460} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0px", width: "52%", paddingRight: "64px" }}>
        <p style={{ fontSize: 60, fontWeight: 800, margin: 0, padding: 0 }}>{title}</p>
        <p style={{ fontSize: 52, fontWeight: 400, margin: 0, padding: 0 }}>{text}</p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontNormal,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontBold,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );

  const opts = {
    background: "rgba(0,0,0,1)",
    fitTo: {
      mode: "width",
      value: 1200,
    },
    font: {
      loadSystemFonts: false,
    },
  };

  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await writeFile(join(basePath, "public", "og_images_generated", ...path.split("/")), "og_image.png", pngBuffer);

  console.log(`OG image generated for ${path} at ${join(basePath, "public", "og_images_generated", ...path.split("/"))}`);
}
