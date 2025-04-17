# Десктопное тестовое задание компании Faraway

Для работы приложения используется The Star Wars API https://swapi.dev

Документация к SWAPI расположена по адресу https://swapi.dev/documentation

## Оглавление

- [Команды запуска скриптов](#Команды-запуска-скриптов)
- [Стек](#Стек)
- [utils](#utils)
  - [swapi-ts](#swapi-ts)

## Команды запуска скриптов

- `npm start` - запуск приложения на http://localhost:3000, так же см [swapi-ts](#swapi-ts)
- `npm run build` - сборка билда для прома
- `npm test` - запуск тестов

## Стек

- `Typescript` - язык, на котором разработано приложение
- `ReactJS` - библиотека на которой разработан интерфейс
- `MobX` - стейт менеджер
- `MaterialUI` - инструмент для построения интерфейса в стиле Material Design
- `esbuild` - быстрый сборщик

## utils

Вспомогательные утилиты

### swapi-ts

npm пакет swapi-ts содержит ошибки, исправленный пакет используется из папки utils, а не устанавливается в node_modules

1. Внёс правки в `node_modules\swapi-ts\dist\SWApi.js`, передаю obj[path] без replace, чтобы исключить ошибку с получившимся httpss вследствие бага в пакете, новый файл находится в `utils\swapi-ts\SWApi.js`
2. Внёс правки в `node_modules\swapi-ts\dist\SWApi.d.ts`, экспортировал Resource, чтобы использовать данный тип в коде, новый файл находится в `utils\swapi-ts\SWApi.d.ts`
