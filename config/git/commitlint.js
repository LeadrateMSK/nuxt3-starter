// Файл создан на основе @commitlint/config-conventional

const cz = require('./commitizen.js')

module.exports = {
  rules: {
    // Тело коммита должно начинаться с пустой строки
    "body-leading-blank": [2, "always"],

    // Нижний колонтитул коммита должен начинаться с пустой строки
    "footer-leading-blank": [2, "always"],

    // Максимальная длина заголовка 72 символа
    "header-max-length": [
      2,
      "always",
      cz.subjectLimit
    ],

    // Область всегда только в нижнем регистре
    "scope-case": [2, "always", "lower-case"],

    // Перечислим все возможные области коммитов
    'scope-enum': [
      1,
      'always',
      cz.scopes.map(type => type.name)
    ],

    // Описание не может быть пустым
    "subject-empty": [2, "never"],

    // Описание не должно заканчиваться '.'
    "subject-full-stop": [2, "never", "."],

    // Тип всегда только в нижнем регистре
    "type-case": [2, "always", "lower-case"],

    // Тип не может быть пустым
    "type-empty": [2, "never"],

    // Перечислим все возможные варианты коммитов
    "type-enum": [
      2,
      "always",
      cz.types.map(type => type.value)
    ]
  }
};
