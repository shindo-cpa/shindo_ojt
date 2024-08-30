document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームの自動送信を防ぐ

    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (password === "12345") { // パスワードが"12345"と一致するか確認
        window.location.href = "home.html"; // 正しい場合にリダイレクトするURL
    } else {
        messageElement.textContent = "パスワードが間違っています。";
        messageElement.style.color = "red";
    }
});