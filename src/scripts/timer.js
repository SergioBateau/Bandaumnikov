const year = new Date().getFullYear();

const timerDay = new Date(year, 4, 24).getTime(); // 4 - это май, тк 0 - январь. 20 - это 20 мая

let timer = setInterval(() => {

  const today = new Date().getTime(); // дата на сегодня

  const diff = timerDay - today; // разница между 24.05.2019 и сегодня

  // let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  let hours = Math.floor(diff / (1000 * 60 * 60));
  
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector('.timer-hour').textContent = String(hours).padStart(2, '0');
  document.querySelector('.timer-minute').textContent = String(minutes).padStart(2, '0');
  document.querySelector('.timer-second').textContent = String(seconds).padStart(2, '0');
  
}, 1000);


