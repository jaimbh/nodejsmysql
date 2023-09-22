# nodejsmysql
simple nodejs express mysql2 api

kill -9 $(lsof -ti:3000)

npm init -y

npm i express body-parser nodemon mysql2

curl -X POST "[ip]:3000/register" -H "Content-Type: application/json" -d '{"name": "john", "phone": "9847373444", "email": "mail@mail.com", "sex": "male"}'
