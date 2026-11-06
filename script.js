(function(){
var m=document.getElementById('menu'),n=document.getElementById('nav');
m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
var d=document.getElementById('lb');
if(d){var im=d.querySelector('img'),p=d.querySelector('p');
document.querySelectorAll('.gal button').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');im.src=i.src;im.alt=i.alt;p.textContent=b.parentNode.querySelector('figcaption').textContent;d.showModal()})});
document.getElementById('x').addEventListener('click',function(){d.close()});
d.addEventListener('click',function(e){if(e.target===d)d.close()});}
})();
