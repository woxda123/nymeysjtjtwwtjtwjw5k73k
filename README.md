# ♞ Wox Mat — шахматы в Telegram Mini App

## Структура
- `index.html` — само приложение (фронтенд)
- `server/` — WebSocket-сервер для онлайн-игры

## Запуск
1. **Фронтенд:** GitHub → Settings → Pages → Branch `main`, папка `/root`. Получите ссылку `https://ВАШ_ЛОГИН.github.io/РЕПО/`.
2. **Сервер:** задеплойте папку `server` на Render/Railway (Start: `npm start`). Получите адрес `wss://...`.
3. В `index.html` найдите строку `var BOT_LINK=..., WS_URL=''` и впишите:
   - `BOT_LINK` — ссылка на вашего бота (`https://t.me/ИМЯ_БОТА/app`)
   - `WS_URL` — адрес сервера (`wss://ваш-сервер.onrender.com`)
4. @BotFather → `/newapp` → выберите бота → вставьте ссылку GitHub Pages.
