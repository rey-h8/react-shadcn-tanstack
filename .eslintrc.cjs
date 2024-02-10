module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true, jest: true },
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:tailwindcss/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: [
		"react-refresh",
		"react",
		"react-hooks",
		"@typescript-eslint",
		"tailwindcss",
	],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"tailwindcss/classnames-order": "warn",
		"tailwindcss/no-custom-classname": "warn",
		"tailwindcss/no-contradicting-classname": "error",
	},
}
