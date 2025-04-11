/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://mnepodpisku.ru',
	changefreq: 'daily',
	priority: 0.7,
	generateRobotsTxt: true,
	exclude: ['/api/*', '/get_discount/*', '/get_discount', '/rbx', '/wb/*', '/wb', '/activate', '/activate/*', '/payment', '/payment/*', '/guides', '/guides/*'],
	additionalPaths: async (config) => [
		await config.transform(config, '/adobe_creative_cloud'),
		await config.transform(config, '/discord'),
		await config.transform(config, '/youtube'),
		await config.transform(config, '/netflix'),
		await config.transform(config, '/tinder'),
		await config.transform(config, '/xbox_game_pass'),
		await config.transform(config, '/spotify'),
		await config.transform(config, '/playstation'),
		await config.transform(config, '/playstation_plus'),
		await config.transform(config, '/playstation_ea_play'),
		await config.transform(config, '/playstation_account')
	],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: [
					'/$',
					'/adobe_creative_cloud',
					'/discord',
					'/youtube',
					'/netflix',
					'/tinder',
					'/xbox_game_pass',
					'/spotify',
					'/playstation',
					'/playstation_plus',
					'/playstation_ea_play',
					'/playstation_account',
					'/adobe_creative_cloud',
					'/blog',
					'/reviews'
				],
				disallow: [
					'/',
					'/adobe_creative_cloud/',
					'/discord/',
					'/youtube/',
					'/netflix/',
					'/tinder/',
					'/xbox_game_pass/',
					'/spotify/',
					'/playstation/',
					'/playstation_plus/',
					'/playstation_ea_play/',
					'/playstation_account/',
					'/adobe_creative_cloud/',
				]
			},
		],
		transformRobotsTxt: async (_, robotsTxt) => `${robotsTxt}\n\nClean-param: amount&dur&sub&etext&_ym_debug`,
	},
}

