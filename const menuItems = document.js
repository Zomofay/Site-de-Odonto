const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach(item => {
  const submenu = item.querySelector('ul');
  if (submenu) {
    item.addEventListener('mouseover', () => {
      submenu.style.display = 'block';
    });
    submenu.addEventListener('mouseout', () => {
      submenu.style.display = 'none';
    });
  }
});
