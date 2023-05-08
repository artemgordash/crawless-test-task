module.exports = function (plop) {
  plop.setGenerator('Component', {
    prompts: [
      {
        type: 'input',
        name: 'destinationpath',
        message: 'Template destination path',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '{{destinationpath}}/{{name}}',
        stripExtensions: ['hbs'],
        base: 'templates/component',
        templateFiles: 'templates/component/*',
      },
    ],
  });
  plop.setHelper('toUppercaseFirstLetter', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });
  plop.setHelper('toKebabCase', (camelCaseString) => camelCaseString.split('').map((letter, index) => {
    if (letter === letter.toUpperCase() && index !== 0) {

      return `-${letter.toLowerCase()}`;
    }

    return letter;
  }).join('').toLowerCase());
};