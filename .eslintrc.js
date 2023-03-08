module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['prettier', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier'
    ],
    rules: {
        'prettier/prettier': ['error'],
        'import/no-unresolved': 'error',
        'import/no-relative-parent-imports': 'error',
        'import/extensions': ['error', 'always', {
            js: 'never',
            ts: 'never',
            jsx: 'never',
            tsx: 'never'
        }],
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'pathGroups': [
                {
                    'pattern': '@/**',
                    'group': 'internal'
                }
            ],
            'pathGroupsExcludedImportTypes': ['builtin'],
            'newlines-between': 'always',
            'alphabetize': {
                'order': 'asc',
                'caseInsensitive': true
            }
        }]
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
            }
        }
    }
}
