module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'Type of Component?',
        choices: ['atoms', 'molecules', 'organisms']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: (data) => {
      const { componentType } = data;
      const actions = [
        /* Index */
        {
          type: 'add',
          path: '../components/{{componentType}}/{{pascalCase name}}/index.tsx',
          templateFile: './templates/index.tsx.hbs',
        },
        /* Component */
        {
          type: 'add',
          path: '../components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: './templates/component.tsx.hbs',
        },
        /* Interface */
        {
          type: 'add',
          path: '../components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.interface.tsx',
          templateFile: './templates/component.interface.tsx.hbs',
        },
        /* Styles */
        {
          type: 'add',
          path: '../components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
          templateFile: './templates/component.styles.tsx.hbs',
        },
        /* Storybook */
        {
          type: 'add',
          path: '../components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: './templates/component.stories.tsx.hbs',
        },
        /* Test */
        {
          type: 'add',
          path: '../components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: './templates/component.test.tsx.hbs',
          skip: () => componentType === 'atoms' || componentType === 'molecules' /* Skip Test File if it's not an Organism. */
        },
      ]

      return actions
    }
  });
};
