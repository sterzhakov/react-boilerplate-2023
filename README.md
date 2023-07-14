# О проекте

## Полезные команды

```
# Запустить дев сервер
yarn dev

# Запустить две сборки standalone и module-federation
yarn build

# Сборка самостоятельного приложения с index.html
yarn build:standalone

# Сборка для встройки в другие приложения без index.html
yarn build:module-federation

# Запустить тесты jest

# Запустить сервер галлереи компонентов Storybook
storybook

# Создать билд галлереи компонентов Storybook
build-storybook

# Запустить тесты Jest
yarn test

```

## Стек

```
Язык програмирования: Typescript
Стиль программирования: Функциональный
Менеджер пакетов: yarn
Версия ноды: v18.12.1
Виртуальный дом: React
Глобальное состояние: Redux, RTKQuery
Моки запросов к серверу: msw
Библиотека интерфейса: Ant Design
Галлерея компонентов: Storybook
Утилиты: Ramda
Формы и валидация: Antd Form
Стили: CSS Modules, SASS
Анимация: react-spring
Сервер для тестов: https://jsonplaceholder.typicode.com/
```

## Стили
```
Всегда импортируем в начале файла чтобы избежать
конфликтов с другими компонентами
```

## Шаблоны именования

```
Цвета: https://chir.ag/projects/name-that-color/#6195ED
Гит ветки: ExamplePage_featureName | ExampleEntity_featureName | ExampleRequest_featureName
Название компонентов: CamelCase
Название утилит: camelCase
Файлы стилей css modules: index.module.scss
Файлы стилей глобальные: index.global.scss
```

## Структура проекта:

```
├── README.md
├── env // переменные окружения для разных сборок
├── jest.config.ts // конфигурация тестов
├── package.json // версии пакетов
├── public // дополнительные ресурсы фронта
│   └── index.html.ejs
├── src
│   ├── antd // Компоненты врапперы для UI библиотеки antd design
│   ├── entities // Основные бизнес сущности проекта (Posts, Comments)
│   ├── helpers // Утилиты используемые между разными компонентами
│   ├── index.tsx // Рутовый файл для standalone сборки, при module federation используется сразу APP
│   ├── pages // Страницы
│   ├── policies // Функции/хуки, возвращающие true/false
│   ├── requests // Запросы, моки
│   ├── root // Кутовые компоненты
│   │   ├── App // Рутовый компонент приложения
│   │   ├── ModuleFederation // Обретка для компонента App для module-federation сборки
│   │   └── Standalone // Обретка для компонента App для standalone сборки
│   └── units // Мелкие компоненты интерфейса, без глобавльного состояния
├── tsconfig.json // Typescript конфиг
├── webpack // Конфигурация сборок wepback
│   ├── common.js
│   ├── development.js
│   ├── module-federation.js
│   └── standalone.js
└── yarn.lock // Фиксируем версии, package.json оставляем открытые и периодически обновляем
```

## Контакты разработчиков

Игорь Стержаков – telegram:@isterzh | автор сборки
