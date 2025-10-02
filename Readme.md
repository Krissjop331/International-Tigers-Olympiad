# International Tigers Olympiad — сайт

Сайт международной олимпиады **International Tigers Olympiad** для школьников 5–12 классов. Проект содержит лендинг, информационные разделы (правила, FAQ, контакты, представители, галерея), а также страницы авторизации и админ‑панель (демо). Стек — **Next.js 15**, **React 19**, **Tailwind CSS 4**.

## ✨ Основные разделы и функциональность

- **Главная /** — герой‑секция с графикой, блок «Почему мы?», статистика, CTA, партнеры, мини‑форма обратной связи.
- **/auth** — форма входа; при успешной авторизации можно сохранять токен (через `js-cookie`).
- **/admin** — демо‑панель администратора (листинг пользователей, действия). Сейчас данные замоканы в состоянии компонента.
- **/create-user** — форма создания пользователя (регистрация).
- **/rules** — правила участия.
- **/faq** — часто задаваемые вопросы.
- **/contacts** — контакты и форма обратной связи.
- **/representatives** — список представителей по странам.
- **/gallery** — галерея примеров работ / изображений.
- **/tasks** — демонстрационный раздел с задачами/челленджами.

## 🧱 Технологии

- **Next.js 15 (App Router)**, **React 19**
- **Tailwind CSS 4** (через `@tailwindcss/postcss`), кастомные утилиты в `globals.css`
- **ESLint 9** с пресетом `next/core-web-vitals`
- Вспомогательные пакеты: `js-cookie`
- Конфиги: `next.config.mjs`, `eslint.config.mjs`, `postcss.config.mjs`, `jsconfig.json` (алиас `@/*` → `src/*`)

## 📁 Структура проекта (сокращенно)

```
src/
  app/
    (страницы) page.js, layout.js, globals.css
    admin/
    auth/
    contacts/
    create-user/
    faq/
    gallery/
    representatives/
    rules/
    tasks/
  components/
    navbar.js
    footer.js
public/
  image/ (логотипы и фоны)
api.js (обертки над REST API)
```

## 🔌 Интеграция с бэкендом

Слой работы с API — файл **`api.js`**. По умолчанию базовый URL указан константой:

```js
// api.js
const API_URL = 'https://tigerbackend.onrender.com';
```

Для продакшена рекомендуется вынести адрес в переменные окружения и использовать `process.env.NEXT_PUBLIC_API_URL`:

```diff
- const API_URL = 'https://tigerbackend.onrender.com'
+ const API_URL = process.env.NEXT_PUBLIC_API_URL
```

Создайте файл **`.env.local`** и укажите:

```
NEXT_PUBLIC_API_URL=https://tigerbackend.onrender.com
```

> ⚠️ Некоторые страницы сейчас используют мок‑данные (локальный `useState`) — это осознанно для портфолио, чтобы показать UI‑часть без обязательного живого бэкенда.

## 🚀 Локальный запуск

Требуется **Node.js 18+**.

```bash
# Установка зависимостей
npm i

# Запуск в dev‑режиме
npm run dev

# Сборка и запуск production
npm run build
npm start

# Линтинг
npm run lint
```

Откройте `http://localhost:3000` в браузере.

## 🧪 Скрипты

- `dev` — запуск Next.js dev‑сервера
- `build` — прод‑сборка
- `start` — запуск собранного приложения
- `lint` — проверка ESLint
