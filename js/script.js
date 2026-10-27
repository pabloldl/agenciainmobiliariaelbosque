'use strict';
const nav = document.querySelector('#route');
const toggle = document.querySelector('.index-toggle');
const mobile = matchMedia('(max-width: 600px)');
function openIndex(open) { nav.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); toggle.querySelector('span').textContent = open ? '[−]' : '[+]'; }
function adaptNavigation() { toggle.hidden = !mobile.matches; openIndex(!mobile.matches); }
adaptNavigation(); mobile.addEventListener('change', adaptNavigation);
toggle.addEventListener('click', () => openIndex(nav.hidden));
nav.addEventListener('click', e => { if (e.target.closest('a') && mobile.matches) openIndex(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobile.matches && !nav.hidden) { openIndex(false); toggle.focus(); } });
const layerTools = document.querySelector('.layer-tools');
const layerButtons = [...layerTools.querySelectorAll('button')];
const panels = [...document.querySelectorAll('.layer-panel')];
function selectLayer(id) { layerButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.layer === id))); panels.forEach(panel => { panel.hidden = panel.id !== id; panel.classList.toggle('just-selected', panel.id === id); }); }
layerTools.hidden = false; selectLayer('paisaje');
layerButtons.forEach(button => button.addEventListener('click', () => selectLayer(button.dataset.layer)));
document.querySelector('.copy').addEventListener('click', async () => { const status = document.querySelector('#copy-status'); try { await navigator.clipboard.writeText('682 196 319'); status.textContent = 'Número copiado.'; document.querySelector('#copy-fallback').hidden = true; } catch { document.querySelector('#copy-fallback').hidden = false; const field = document.querySelector('#number'); field.focus(); field.select(); status.textContent = 'Selecciona y copia el número.'; } });
document.querySelector('#year').textContent = new Date().getFullYear();
const sections = [...document.querySelectorAll('main > section')];
function trackPosition() { let current = sections[0]; sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) current = section; }); nav.querySelectorAll('a').forEach(link => { if (link.hash === '#' + current.id) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); }); }
let scheduled = false;
addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { trackPosition(); scheduled = false; }); } }, {passive:true});
trackPosition();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), {threshold:.15}); document.querySelectorAll('.terrain-board,.contact-plan').forEach(element => observer.observe(element)); }
