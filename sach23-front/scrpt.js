const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const downloadLink = document.querySelector('.popup a.btn');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

downloadLink.addEventListener('click', () => {
  popup.style.display = 'none';
});