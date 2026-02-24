document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Carousel setup
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const indicatorsEl = document.getElementById('carouselIndicators');
  if(track){
    const slides = Array.from(track.children);
    let current = 0;
    let interval = null;

    // create indicators
    slides.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Slide ' + (i+1));
      btn.setAttribute('role','tab');
      btn.addEventListener('click', ()=> goTo(i));
      if(indicatorsEl) indicatorsEl.appendChild(btn);
    });

    const indicators = indicatorsEl ? Array.from(indicatorsEl.children) : [];

    function updateIndicators(){
      indicators.forEach((b, idx) => {
        if(idx === current) b.setAttribute('aria-current','true'); else b.removeAttribute('aria-current');
      });
    }

    function goTo(index){
      if(index < 0) index = slides.length -1;
      if(index >= slides.length) index = 0;
      current = index;
      track.style.transform = 'translateX(' + (-current * 100) + '%)';
      updateIndicators();
    }

    function next(){ goTo(current+1); }
    function prev(){ goTo(current-1); }

    if(nextBtn) nextBtn.addEventListener('click', ()=>{ next(); resetAuto(); });
    if(prevBtn) prevBtn.addEventListener('click', ()=>{ prev(); resetAuto(); });

    // autoplay
    function startAuto(){ interval = setInterval(next, 5000); }
    function stopAuto(){ if(interval) { clearInterval(interval); interval = null; } }
    function resetAuto(){ stopAuto(); startAuto(); }

    // pause on hover/focus
    track.parentElement.addEventListener('mouseenter', stopAuto);
    track.parentElement.addEventListener('mouseleave', startAuto);
    track.parentElement.addEventListener('focusin', stopAuto);
    track.parentElement.addEventListener('focusout', startAuto);

    // keyboard navigation
    track.parentElement.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowRight') { next(); resetAuto(); }
      if(e.key === 'ArrowLeft') { prev(); resetAuto(); }
    });

    // init
    goTo(0);
    startAuto();
  }
});
