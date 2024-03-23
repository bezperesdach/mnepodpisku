/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/activate/wb',
				destination: '/wb',
				permanent: true,
			},
			{
				source: '/ps_plus',
				destination: '/playstation_plus',
				permanent: true,
			},
		]
	},
	experimental: {
		serverComponentsExternalPackages: ["@resvg/resvg-js"],
	},
}

module.exports = nextConfig
