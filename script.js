// HTML要素を取得
const button = document.getElementById('change-text-btn');
const heading = document.getElementById('main-heading');

// ★★★ ここに綴りミスのバグが残っています ★★★
buttonn.addEventListener('click', () => {
  heading.textContent = 'JavaScriptで変更しました！';
});
