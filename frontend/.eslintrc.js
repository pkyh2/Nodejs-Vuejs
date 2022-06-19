module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	extends: [
		// standard를 불러오지 못해 "plugin:"을 붙여 다시 설정하니 됨.
		'standard',
		'eslint:recommended',
		'plugin:vue/essential',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['html', 'standard', 'vue', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		'generator-star-spacing': 'off',
		'no-dubugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
};
