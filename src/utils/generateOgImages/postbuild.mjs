import { generateOgImage } from "./generateOgImage.tsx"

const pages = [
	{
		path: HomePage.openGraph?.url,
		text: HomePage.openGraph?.title,
	},
	{
		path: DigiPage.openGraph?.url,
		text: DigiPage.openGraph?.description,
	},
	{
		path: WbPage.openGraph?.url,
		text: WbPage.openGraph?.description,
	},
	{
		path: BlogPage.openGraph?.url,
		text: BlogPage.openGraph?.description,
	},
	{
		path: kak_samomu_sozdat_tureckiy_akaunt.openGraph?.url,
		text: kak_samomu_sozdat_tureckiy_akaunt.openGraph?.description,
	},
];

const generate = async () => {
	pages.map(async (page) => {
		await generateOgImage({ path: page.path, title: page.title, text: page.text });
	});
};

generate();
