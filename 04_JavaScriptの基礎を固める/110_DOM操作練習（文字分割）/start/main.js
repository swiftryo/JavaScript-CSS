
document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.animate-title');
  // console.log(el.innerHTML.trim());
  const str = el.innerHTML.trim().split("");


  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;')
    return `${acc}<span class="char">${curr}</span>`;

  }, "");
});

//   let concatStr = '';

//   for(let c of str) {
//     // console.log(`<span class="char">${c}</span>`);
//     // console.log('<span class="char">'+${c}+'</span>'); 
//     // 上と同じ
//     c = c.replace(/\s+/, '&nbsp;')
//     concatStr += `<span class="char">${c}</span>`;
//   }
//   el.innerHTML = concatStr;
//   // console.log(concatStr);
// });

// // ``で囲まれた文字列をテンプレートリテアルという（バックティック）
// // 正規表現