function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open');}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open');}
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);});
const revEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*100);io.unobserve(e.target);}
  });
},{threshold:0.1});
revEls.forEach(el=>io.observe(el));