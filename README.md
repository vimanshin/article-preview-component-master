# Frontend Mentor - Решение задания «Компонент превью статьи»

Это решение задания [«Компонент превью статьи» на Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Задания Frontend Mentor помогают прокачать навыки фронтенд-разработки на реалистичных проектах.

## Содержание

- [Обзор](#overview)
  - [Задание](#задание)
  - [Скриншот](#скриншот)
  - [Ссылки](#ссылки)
- [Мой процесс работы](#мой-процесс-работы)
  - [Использованные технологии](#использованные-технологии)
  - [Чему я научился](#чему-я-научился)

## Обзор

### Задание

Пользователи должны иметь возможность:

- Видеть оптимальную вёрстку компонента в зависимости от размера экрана устройства
- Видеть ссылки на социальные сети при клике на иконку «поделиться»

### Скриншот

![](./design/desktop-preview.jpg)

### Ссылки

- URL живого сайта: [Ссылка на живой сайт](https://vimanshin.github.io/article-preview-component-master/)

## Мой процесс работы

### Использованные технологии

- HTML5 — семантическая разметка (`article`, `main`, `footer`, `time`)
- SCSS — модульная архитектура (`@use`, партиалы, переменные, миксины)
- CSS3 — Flexbox, `position`, `object-fit`, псевдоэлементы (`::after`)
- JavaScript (ES6+) — vanilla JS без фреймворков
- Mobile-first — три брейкпоинта: mobile / tablet (768px) / desktop (1024px)
- BEM — именование классов (`block`, `block__element`, `block--modifier`)
- Sass — компиляция SCSS в CSS
- PostCSS Sorting — единый порядок CSS-свойств
- Stylelint — проверка качества стилей
- Figma — сверка с макетом (Desktop, Tablet, Mobile + Active-состояния)
- Git & GitHub Pages — деплой готового решения

### Чему я научился

- Строить адаптивный layout **mobile-first**: сначала mobile, потом расширения через `@include mixins.tablet()` и `desktop()`
- Организовывать SCSS: переменные, миксины, компоненты и точка сборки `main.scss`
- Использовать `@use` вместо устаревшего `@import` и namespace (`variables.$color-grey-900`)
- Верстать карточку на **Flexbox** — вертикальная раскладка на mobile, горизонтальная на tablet/desktop
- Обрезать и позиционировать изображения через `object-fit: cover` и `object-position`
- Делать **два варианта Share-панели** в одной разметке: mobile-полоса внизу и tooltip на tablet/desktop через media queries
- Рисовать стрелку tooltip на чистом CSS (`border` + `::after`)
- Писать доступный интерактив: `aria-expanded`, `aria-controls`, `hidden`, `:focus-visible`, зона нажатия 44×44px
- Подключать JavaScript по паттерну `initShare()` с ранним `return`, toggle-классами и закрытием по Escape / клику вне
- Отличать «pixel perfect по цифрам Figma» от реальной вёрстки, когда элемент в макете — SVG, а в коде — CSS
- Настраивать инструменты: `sass:build`, PostCSS Sorting, Stylelint