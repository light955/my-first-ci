// HTMLの中からidが「change-text-btn」の要素（ボタン）を探してくる
const button = document.getElementById('change-text-btn');
// HTMLの中からidが「main-heading」の要素（h1の見出し）を探してくる
const heading = document.getElementById('main-heading');

// ★★★ わざと綴りを間違えてみる ★★★
buttonn.addEventListener('click', () => {
  heading.textContent = 'JavaScriptで変更しました！( ^)o(^ )';
});
```    *   「Commit new file」で保存します。
