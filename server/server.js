const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql2.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'todolist',
  //port: 3307
})

app.post('/create', (req, res) => {
  const todoTask = req.body.todoTask

  db.query('INSERT INTO tasks (todoTask) VALUES (?)',
    [todoTask],  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({insertId: result.insertId});
    }
  });
})

app.get('/todolist', (req, res) => {
  db.query('SELECT * FROM tasks',
  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.put('/update', (req, res) => {
  const todoTask = req.body.todoTask
  const id = req.body.id
  db.query('UPDATE tasks SET todoTask = ? WHERE id = ?', [todoTask, id], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  db.query('DELETE FROM tasks WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(5000, () => {
  console.log("server started on port 5000")
})

// const fs = require("fs").promises;

// async function main() {
//   await findFiles("TodoList")
// }

// main();

// async function findFiles(folderName) {
//   let files = [];
  
//   const items = await fs.readdir(folderName, {withFileTypes: true});

//   for (const item of items) {
//     if (item.isDirectory()) {
//       files = files.concat(
//         await findFiles(`${folderName}/${item.name}`)
//       );
//     } else {
//       if (item.name === "tasks.json") {
//         files.push(`${folderName}/${item.name}`);
//       }
//     }
//   }

//   return files;
// }