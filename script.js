const wrap = document.querySelectorAll('.wrap'),
      choc = document.querySelectorAll('.choc'),
      start = document.querySelectorAll('.start');


let pos = -100;
console.log(wrap);
wrap[0].style.backgroundImage = 'url("./img/0.jpg")';
wrap[0].style.backgroundSize = 'cover';
wrap[1].style.backgroundImage = `url('./img/1.jpg')`;
wrap[1].style.backgroundSize = 'cover';

start.forEach(function(item){
  item.addEventListener('click', scrollingWrap);
})

function scrollingWrap(){
  wrap.forEach(function(item){
    item.style.transform = `translateY(${pos}%)`
  })
  return pos -=100;
}