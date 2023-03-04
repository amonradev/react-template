module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component for your application',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the component name? (Please, use PascalCase)'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.css',
                templateFile: 'plop-templates/component/component.css.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.test.js',
                templateFile: 'plop-templates/component/component.test.js.hbs'
            }
        ]
    });
    plop.setGenerator('hook', {
        description: 'Create a custom hook for your application',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the hooks name? (Please, use camelCase)'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/hooks/{{name}}/{{name}}.js',
                templateFile: 'plop-templates/hook/hook.js.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.test.js',
                templateFile: 'plop-templates/hook/hook.test.js.hbs'
            }
        ]
    });
    plop.setGenerator('page', {
        description: 'Create a page for your application',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the page name? (Please, use PascalCase)'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{name}}/{{name}}.tsx',
                templateFile: 'plop-templates/page/page.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/pages/{{name}}/{{name}}.css',
                templateFile: 'plop-templates/page/page.css.hbs'
            },
            {
                type: 'add',
                path: 'src/pages/{{name}}/{{name}}.test.js',
                templateFile: 'plop-templates/page/page.test.js.hbs'
            }
        ]
    });
};