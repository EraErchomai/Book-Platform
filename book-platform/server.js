let books =[
    {
        "id": 0,
        "title": "Однажды разбитое сердце",
        "img": "https://s1.livelib.ru/boocover/1007529268/200x305/ea02/boocover.jpg",
        "author": "Стефани Гарбер",
        "state": "Прочитала",
        "add": true
    },
    {
        "id": 1,
        "title": "Однажды разбитое сердце",
        "img": "https://s1.livelib.ru/boocover/1007529268/200x305/ea02/boocover.jpg",
        "author": "Стефани Гарбер",
        "state": "Прочитала",
        "add": true
    },
    {
        "id": 2,
        "title": "Однажды разбитое сердце",
        "img": "https://s1.livelib.ru/boocover/1007529268/200x305/ea02/boocover.jpg",
        "author": "Стефани Гарбер",
        "state": "Прочитала",
        "add": true
    }
  ];
  const express = require('express');
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.put("/books/:id", function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);
  
    if (userIdx !== -1) {
        const oldUser = users[userIdx];
        users[userIdx] = { ...oldUser, ...req.body };
        res.json(users[userIdx]);
      } else {
        res.status(404).json();
      }
    });
  
  app.post('/books', function (req, res) {
  users.push(req.body);
  res.json(req.body);
  });
  
  app.get('/books', function (req, res) {
  res.json(users);
  });
  
  app.delete('/books/:id', function (req, res) {
    const idOfUser = parseInt(req.params.id);
    users = users.filter((user) => user.id !== idOfUser);
    res.json(users);
  });
  
  app.listen(3000, () =>
  console.log('App listening at port 3000')
  );