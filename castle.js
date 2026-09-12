'use strict';
(() => {
  const key = 'me-no-shima:castle-checklist:v1';
  const inputs = [...document.querySelectorAll('[data-check]')];
  const status = document.getElementById('save-status');
  const counter = document.getElementById('checklist-count');
  let canSave = true;
  let saved = {};
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      const data = JSON.parse(raw);
      if (!data || data.version !== 1 || !data.checks || typeof data.checks !== 'object' || Array.isArray(data.checks)) throw new Error('Unsupported checklist data');
      if (Object.values(data.checks).some(value => typeof value !== 'boolean')) throw new Error('Invalid checkbox data');
      saved = data.checks;
    }
  } catch {
    canSave = false;
    status.textContent = '保存データを読み込めません。このページを開いている間だけチェックできます。元の保存データは変更しません。';
    status.classList.add('storage-warning');
  }
  const updateCounter = () => {
    const count = inputs.filter(input => input.checked).length;
    counter.textContent = 'チェックリスト / ' + count + ' / ' + inputs.length + ' 件チェック';
  };
  for (const input of inputs) {
    input.checked = saved[input.dataset.check] === true;
    input.addEventListener('change', () => {
      updateCounter();
      if (!canSave) return;
      const checks = Object.fromEntries(inputs.map(item => [item.dataset.check, item.checked]));
      try {
        localStorage.setItem(key, JSON.stringify({version: 1, checks}));
        status.textContent = 'この端末・このブラウザに保存しました。共有・同期はしません。';
      } catch {
        canSave = false;
        status.textContent = '端末に保存できませんでした。このページを開いている間だけチェックできます。';
        status.classList.add('storage-warning');
      }
    });
  }
  updateCounter();

  const dialog = document.getElementById('art-dialog');
  const expanded = document.getElementById('expanded-art');
  const caption = document.getElementById('dialog-caption');
  const imageFrame = dialog.querySelector('.dialog-image');
  const zoomButton = document.getElementById('toggle-zoom');
  const setZoom = zoomed => {
    imageFrame.classList.toggle('is-zoomed', zoomed);
    zoomButton.setAttribute('aria-pressed', String(zoomed));
    zoomButton.textContent = zoomed ? '全体表示' : '原寸表示';
  };
  let opener = null;
  for (const link of document.querySelectorAll('[data-lightbox]')) {
    link.addEventListener('click', event => {
      if (typeof dialog.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      setZoom(false);
      expanded.src = link.href;
      expanded.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.caption;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      document.getElementById('close-art').focus();
    });
  }
  document.getElementById('close-art').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    setZoom(false);
    opener?.focus({preventScroll: true});
  });
  const toggleZoom = () => setZoom(!imageFrame.classList.contains('is-zoomed'));
  expanded.addEventListener('click', toggleZoom);
  zoomButton.addEventListener('click', toggleZoom);
})();
