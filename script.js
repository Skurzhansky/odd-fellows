function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
window.addEventListener('scroll',()=>{document.querySelector('nav').style.boxShadow=window.scrollY>50?'0 4px 24px rgba(0,0,0,.35)':'none'});
