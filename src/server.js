const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'pswd',
  database: 'todoByGemini'
});

connection.connect();

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', express.urlencoded({ extended: true }), (req, res) => {
  const { username, password } = req.body;

  console.log('ユーザー名:', username);
  console.log('パスワード:', password);

  const sql = 'SELECT * FROM users WHERE username = ?';
  const values = [username];

  connection.query(sql, values, function (error, results, fields) {
    if (error) throw error;

    if (results.length === 0) {
      console.log('ユーザーが見つかりません:', username);
      return res.status(400).json({ success: false, message: 'ユーザー名またはパスワードが正しくありません。' });
    }

    const user = results[0];

    if (password !== user.password) {
      console.log('パスワードが正しくありません:', username);
      return res.status(400).json({ success: false, message: 'ユーザー名またはパスワードが正しくありません。' });
    }

    return res.status(200).json({ success: true });
  });
});

app.listen(3000, () => {
  console.log('サーバーがポート3000で稼働しています。');
});