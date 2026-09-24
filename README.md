# Express Server

Cервер на **Node.js + Express.js** із модульною структурою за патерном MVC.
Усі відповіді сервера — простий текст (`text/plain`), що спрощує інтеграцію та відладку.

## Функціональність

Сервер слухає порт **3000** і обробляє маршрути для головної сторінки, користувачів (`users`) та статей (`articles`).
Логіка обробки запитів винесена в контролери, а маршрути лише зіставляють URL і HTTP-методи з контролерами.

## Структура проєкту

```
express-server/
├── controllers/
│   ├── rootController.js      # логіка маршруту "/"
│   ├── usersController.js     # логіка маршрутів "/users"
│   └── articlesController.js  # логіка маршрутів "/articles"
├── routes/
│   ├── index.js               # головний роутер, підключає решту
│   ├── users.js               # маршрути "/users" та "/users/:userId"
│   └── articles.js            # маршрути "/articles" та "/articles/:articleId"
├── server.js                  # точка входу, налаштування Express
├── package.json
└── README.md
```

Окремої папки `models` немає, оскільки на цьому етапі база даних не використовується.
Вона додається за потреби як третя складова MVC.

## Встановлення та запуск


```bash
git clone <посилання-на-репозиторій>
cd express-server
npm install      # або: yarn install
npm start        # або: yarn start
```

Режим розробки з автоперезапуском (Node.js 18.11+):

```bash
npm run dev
```

Після запуску сервер доступний за адресою `http://localhost:3000`.

## Маршрути

| Метод  | Маршрут                | Відповідь                                 |
| ------ | ---------------------- | ----------------------------------------- |
| GET    | `/`                    | `Get root route`                          |
| GET    | `/users`               | `Get users route`                         |
| POST   | `/users`               | `Post users route`                        |
| GET    | `/users/:userId`       | `Get user by Id route: {userId}`          |
| PUT    | `/users/:userId`       | `Put user by Id route: {userId}`          |
| DELETE | `/users/:userId`       | `Delete user by Id route: {userId}`       |
| GET    | `/articles`            | `Get articles route`                      |
| POST   | `/articles`            | `Post articles route`                     |
| GET    | `/articles/:articleId` | `Get article by Id route: {articleId}`    |
| PUT    | `/articles/:articleId` | `Put article by Id route: {articleId}`    |
| DELETE | `/articles/:articleId` | `Delete article by Id route: {articleId}` |

Усі інші маршрути повертають `404` з текстом `Not found`.

### Приклади запитів

```bash
curl http://localhost:3000/
# Get root route

curl -X POST http://localhost:3000/users
# Post users route

curl http://localhost:3000/users/42
# Get user by Id route: 42

curl -X DELETE http://localhost:3000/articles/7
# Delete article by Id route: 7
```
