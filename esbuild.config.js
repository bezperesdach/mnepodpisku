const esbuild = require('esbuild');

const build = async () => {
	try {
		let result = await esbuild.build({
			entryPoints: ['src/utils/generateOgImages/generateOgImages.tsx'],
			platform: 'node',
			bundle: true,
			minify: true,
			loader: { ".png": "dataurl", ".tsx": "tsx" },
			external: ["@resvg/resvg-js"],
			jsx: "automatic",
			outfile: 'dist/out.js',
		});
		console.log(result);
	} catch (err) {
		console.log(err);
	}

}

build();

