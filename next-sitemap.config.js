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
		await config.transform(config, '/netflix'),
		await config.transform(config, '/netflix'),
		await config.transform(config, '/playstation'),
		await config.transform(config, '/playstation_account'),
		await config.transform(config, '/playstation_ea_play'),
		await config.transform(config, '/playstation_plus'),
		await config.transform(config, '/spotify'),
		await config.transform(config, '/tinder'),
		await config.transform(config, '/xbox_game_pass'),
		await config.transform(config, '/youtube'),
	],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: ['/playstation$', '/playstation_plus$', '/spotify$', '/playstation_account$', '/adobe_creative_cloud$', '/discord$'
					, '/youtube$', '/netflix$', '/tinder$', '/xbox_game_pass$'],
				disallow: ['/cdn-cgi/l/email-protection', '/payment/verification', '/wb', '/digi', '/activate', '/get_discount', '/rbx', '/playstation', '/playstation_plus', '/spotify', '/playstation_account', '/adobe_creative_cloud', '/discord'
					, '/youtube', '/netflix', '/tinder', '/xbox_game_pass', '/gde_posmotret_rezervnyi_kod',
					'/kak_otpravit_chek_wb',
					'/kak_otrpavit_soobshenie_prodavcu_wb',
					'/kak_privyazat_kartu_k_turezkomu_akauntu_psn',
					'/kak_vkluchit_2fa_na_akaunte_psn', '/guides']
			},
		],
		transformRobotsTxt: async (_, robotsTxt) => `${robotsTxt}\n\nClean-param: amount&dur&sub&etext&_ym_debug`,
	},
}

