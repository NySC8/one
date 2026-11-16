// هدر شیشه‌ای هنگام اسکرول
const hdr=document.getElementById('hdr');
const onScroll=()=>hdr.classList.toggle('scrolled',scrollY>30);
addEventListener('scroll',onScroll,{passive:true});onScroll();

// انیمیشن ورود بخش‌ها (با تأخیر پله‌ای)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>{
  const sib=[...el.parentElement.children].filter(c=>c.classList.contains('reveal'));
  el.style.setProperty('--d',(sib.indexOf(el)*0.1)+'s');io.observe(el);
});

// اسکرول خودکار نظرات: راست به چپ، شروع با تأخیر ۰.۷ ثانیه
// (برای تغییر تأخیر: --spd در style.css)
const track=document.querySelector('#marquee .track');
const base=[...track.children];
// کپی‌کردن کارت‌ها تا یک نیمه‌ی ترک از عرض صفحه بزرگ‌تر شود و حلقه بی‌انتها شود
let guard=0;
while(track.scrollWidth<innerWidth*1.3&&guard++<10)base.forEach(c=>{const n=c.cloneNode(true);n.setAttribute('aria-hidden','true');track.appendChild(n)});
[...track.children].forEach(c=>track.appendChild(c.cloneNode(true)));
