const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.success) {
    // ログインに成功したら、ユーザーをダッシュボードにリダイレクトします。
    window.location.href = '/dashboard';
  } else {
    // ログインに失敗したら、エラーメッセージを表示します。
    alert(data.message);
  }
});