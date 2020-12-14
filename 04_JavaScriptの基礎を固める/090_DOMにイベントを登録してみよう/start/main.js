
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
// btn.addEventListener('click', function() {
//   alert('hello');
// });

const changeColor = function() {
  h1.style.color = 'red';
};
const changebg = function() {
  h1.style.backgroundColor = 'green';
};
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changebg);
// btn.removeEventListener('click', hello);

btn.onclick = changeColor;
btn.onclick = changebg;
// イベントハンドラ
// 一つしか登録できない addEventがベター



