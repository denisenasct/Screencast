(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const target = a.getAttribute('href').split('/').pop();
    if (target === here) a.style.opacity = '1';
  });
})();
