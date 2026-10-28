'use strict';
const navigation = document.querySelector('#navigation');
const menu = document.querySelector('.menu-toggle');
const mobile = matchMedia('(max-width: 650px)');
function setMenu(open) {
  navigation.hidden = !open;
  menu.setAttribute('aria-expanded', String(open));
}
function adaptMenu() { menu.hidden = !mobile.matches; setMenu(!mobile.matches); }
adaptMenu();
mobile.addEventListener('change', adaptMenu);
menu.addEventListener('click', () => setMenu(navigation.hidden));
navigation.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) { setMenu(false); menu.focus(); }
});
const copy = document.querySelector('.copy');
copy.hidden = false;
copy.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  const fallback = document.querySelector('#copy-fallback');
  try { await navigator.clipboard.writeText('682 196 319'); fallback.hidden = true; status.textContent = 'Número copiado.'; }
  catch { fallback.hidden = false; const field = document.querySelector('#number'); field.focus(); field.select(); status.textContent = 'Selecciona y copia el número.'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
