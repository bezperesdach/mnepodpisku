/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/activate/wb',
				destination: '/wb',
				permanent: true,
			},
		]
	},
	experimental: {
		serverComponentsExternalPackages: ["@resvg/resvg-js"],
	},
}

module.exports = nextConfig
