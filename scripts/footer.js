export function renderFooter() {
  const currentYear = new Date().getFullYear();
  document.querySelector('.js-footer').innerHTML = `
    <div>&copy ${currentYear} Antoni Magendans</div> 
  `;
}