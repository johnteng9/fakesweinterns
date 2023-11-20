const express = require('express');
const cors = require('cors');

const app = express();

// allow CORS everywhere
app.use(cors());

// use SQLite database
const sqlite3 = require('sqlite3').verbose();
// open database in file named database
let db = new sqlite3.Database('./database', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  // create users table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, instructor TEXT NOT NULL UNIQUE, department TEXT NOT NULL, startTime INTEGER NOT NULL, endTime INTERGER NOT NULL)', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Created classes table.');
  });
  
// add class
app.post('/addClass', (req, res) => {
    const name = req.query.name;
    const instructor = req.query.instructor;
    const department = req.query.department;
    const startTime = req.query.startTime;
    const endTime = req.query.endTime
    const sql = 'INSERT INTO users (name, instructor, department, startTime, endTime) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [name, instructor, department, startTime, endTime], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ success: 'Class created.' });
    });
  })
  // allow log out with token
app.delete('/deleteClass', (req, res) => {
    const id = req.query.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.run(sql, [id], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ success: 'class deleted' });
    });
  });
  
  // allow getting user info with token
  app.get('/getClass', (req, res) => {
    const id = req.query.id;
    const sql = 'SELECT name, instructor, department, startTime, endTime FROM users WHERE id = ?';
    db.get(sql, [id], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!rows) {
        return res.status(401).json({ error: 'Invalid id.' });
      }
      return res.json({ name: rows.name, instructor: rows.instructor, department: rows.department, start: rows.startTime, end: rows.endTime});
    });
  });
  
  app.get('/getAllClass', (req, res) => {
    const sql = 'SELECT name, id, instructor, department, startTime, endTime FROM users';
    db.get(sql, [], (err,rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      else{
        return res.json({ id: rows.id, name: rows.name, instructor: rows.instructor, department: rows.department, start: rows.startTime, end: rows.endTime});
      }
      //return res.json({ id: row.id, name: row.name, instructor: row.instructor, department: row.department, start: row.startTime, end: row.endTime});
      //return res.json({ id: rows.id, name: rows.name, instructor: rows.instructor, department: rows.department, start: rows.startTime, end: rows.endTime});
    })
  });

  app.listen(3004, () => {
    console.log('Server running on port 3004');
  });  