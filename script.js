const subscribeBtns = document.querySelectorAll('.subscribe-btn');

subscribeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'https://example.com/subscribe';
  });
});

const pricingSections = document.querySelectorAll('.pricing-plan');

pricingSections.forEach(section => {
  const toggleBtn = section.querySelector('.toggle-btn');
  const price = section.querySelector('.price');

  toggleBtn.addEventListener('click', () => {
    if (price.style.textDecoration === 'line-through') {
      price.style.textDecoration = 'none';
    } else {
      price.style.textDecoration = 'line-through';
    }
  });
});
