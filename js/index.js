const copyBlock = document.getElementById('copy-block');
  const tooltip = document.getElementById('copy-tooltip');

  function copyText() {
  const text = copyBlock.querySelector('h4').textContent.trim().replace(/^CA:\s*/, '');

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

  
  const copyBlock2 = document.getElementById('copy-block2');
const tooltip2 = document.getElementById('copy-tooltip2');

function copyText2() {
  const text = copyBlock2.querySelector('h4').textContent.trim().replace(/^CA:\s*/, '');

  navigator.clipboard.writeText(text).then(() => {
    tooltip2.style.opacity = '1';
    setTimeout(() => {
      tooltip2.style.opacity = '0';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

copyBlock2.addEventListener('click', copyText2);

copyBlock2.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    copyText2();
  }
});