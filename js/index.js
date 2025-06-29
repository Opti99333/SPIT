const copyBlock = document.getElementById('copy-block');
  const tooltip = document.getElementById('copy-tooltip');

  function copyText() {
    const text = copyBlock.textContent.trim().replace(/^CA:\s*/, '');

    navigator.clipboard.writeText(text).then(() => {
      tooltip.style.opacity = '1';
      setTimeout(() => {
        tooltip.style.opacity = '0';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  copyBlock.addEventListener('click', copyText);

  copyBlock.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      copyText();
    }
  });