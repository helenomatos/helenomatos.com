// Email is split in the markup so naive scrapers don't pick it up.
const btn = document.querySelector('.email');
if (btn) {
  const label = btn.querySelector('span');
  const email = `${btn.dataset.u}@${btn.dataset.d}`;
  let timer;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = 'copied! talk soon ✌️';
    } catch {
      window.location.href = `mailto:${email}`;
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => { label.textContent = 'copy my email'; }, 2200);
  });
}
