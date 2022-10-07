# Nuxt 3 Starter LR
[Nuxt 3 документация](https://v3.nuxtjs.org)

## Стартер использует
- :white_check_mark: Nuxt 3
- :white_check_mark: Pinia
- :white_check_mark: EditorConfig
- :white_check_mark: TypeScript
- :white_check_mark: ESlint & prettier
- :white_check_mark: Vitest
- :white_check_mark: Husky + LintStage + commitlint + commitizen
- :white_check_mark: Tailwind CSS

## Запуск
Установка зависимостей:

```bash
# npm
npm install
```

## Сервер разработки
Запуск локального сервера http://localhost:3000

```bash
npm run dev
```

## Продакшн
Сборка продакшн-версии:

```bash
npm run build
```

Предосмотр локальной сборки:

```bash
npm run preview
```

[Документация по деплою](https://v3.nuxtjs.org/guide/deploy/presets)

## GIT
Commitizen и Conventional Commits

Если вы ещё не работали с commitizen, установите его глобально:
```bash
npm install --global commitizen
```

```bash
git add .
git cz
```
