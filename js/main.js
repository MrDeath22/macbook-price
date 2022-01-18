let imgMain = document.querySelectorAll('.mac-img');
let imgEl = document.querySelectorAll('.img');

imgEl.forEach(item => {
   item.addEventListener('click', () => {
      imgEl.forEach(itemm => {
         itemm.classList.remove('img-active');
      })
      item.classList.add('img-active');
   })
})

let c = document.querySelector('.count');
let count = document.querySelector('.count').textContent.slice(0, 8);

let ram8 = document.querySelector('.ram8');
let ram16 = document.querySelector('.ram16');


function addActive16() {
   count = `17 400 000 so'm`;
   c.textContent = count;
   ram8.classList.remove('macbook-btn--active');
   ram16.classList.add('macbook-btn--active');
   
   rom512.classList.remove('macbook-btn--active');
   rom1.classList.remove('macbook-btn--active');
   rom256.classList.add('macbook-btn--active');
}

function addActive8() {
   x = 0;
   count = `16 280 000 so'm`;
   c.textContent = count;
   ram16.classList.remove('macbook-btn--active');
   ram8.classList.add('macbook-btn--active');

   rom512.classList.remove('macbook-btn--active');
   rom1.classList.remove('macbook-btn--active');
   rom256.classList.add('macbook-btn--active');
}

ram16.addEventListener('click', addActive16);
ram8.addEventListener('click', addActive8);

// ---------------------

let rom256 = document.querySelector('.rom256');
let rom512 = document.querySelector('.rom512');
let rom1 = document.querySelector('.rom1');

function addActive1() {
   if (ram16.classList == 'macbook-btn ram16 macbook-btn--active') {
      count = `23 560 000 so'm`;
   } else {
      count = `19 230 000 so'm`;
   }
   c.textContent = count;
   rom256.classList.remove('macbook-btn--active');
   rom512.classList.remove('macbook-btn--active');
   rom1.classList.add('macbook-btn--active');
}

function addActive512() {
   if (ram16.classList == 'macbook-btn ram16 macbook-btn--active') {
      count = `18 160 000 so'm`;
   } else {
      count = `17 430 000 so'm`;
   }
   c.textContent = count;
   rom1.classList.remove('macbook-btn--active');
   rom256.classList.remove('macbook-btn--active');
   rom512.classList.add('macbook-btn--active');
}

function addActive256() {
   if (ram16.classList == 'macbook-btn ram16 macbook-btn--active') {
      count = `17 400 000 so'm`;
   } else {
      count = `16 280 000 so'm`;
   }
   c.textContent = count;
   rom512.classList.remove('macbook-btn--active');
   rom1.classList.remove('macbook-btn--active');
   rom256.classList.add('macbook-btn--active');
}

rom1.addEventListener('click', addActive1);
rom512.addEventListener('click', addActive512);
rom256.addEventListener('click', addActive256);

let clBtns = document.querySelectorAll('.cl-btn');

clBtns.forEach(item => {
   item.addEventListener('click', () => {
      clBtns.forEach(itemm => {
         itemm.classList.remove('macbook-btn--active');
      })
      item.classList.add('macbook-btn--active');
   })
})

// --------------------------

let m = document.querySelector('.m');
let width = 400;

for (let i of obj.gold) {
   console.log(i);
}

imgEl.forEach(item => {
   item.addEventListener('click', (e) => {
      m.style.left = `${width - item.name * width}px`;
   })
})

// --------------------------

let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let number = document.querySelector('.num');

minus.addEventListener('click', () => {
   number.textContent--;
   if (number.textContent == 1) {
      minus.addEventListener('click', () => {
         number.textContent = 1;
      })
   }
   count = `16 280 000 so'm`;
   c.textContent = count;
})

plus.addEventListener('click', () => {
   number.textContent++;
   count = `33 860 000 so'm`;
   c.textContent = count;

   plus.addEventListener('click', () => {
      count = `49 230 000 so'm`;
      c.textContent = count;
   })
})













