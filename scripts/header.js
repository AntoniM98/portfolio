export function renderHeader() {
  const siteData = {
    url: 'https://antonimagendans.nl',
    logo: '../../images/Logo.png'
  };
  
  headerHTML();

  function headerHTML() {
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    document.querySelector('.js-header').innerHTML = `
      <nav class="navbar">
        <div class="logo-container">
          <a href="${siteData.url}"><img class="logo" src="${siteData.logo}"></a>
        </div>
        <div class="link-container">
          <a href="${isHomepage ? '#projects' : `${siteData.url}#projects`}" class="navigation-link">PROJECTEN</a>
          <a href="${isHomepage ? '#about' : `${siteData.url}#about`}" class="navigation-link">OVER MIJ</a>
          <a href="${isHomepage ? '#contact' : `${siteData.url}#contact`}" class="navigation-link">CONTACT</a>
        </div>
        <div class="hamburger js-hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <div class="hamburger-nav js-hamburger-nav">
          <a href="${isHomepage ? '#projects' : `${siteData.url}#projects`}" class="navigation-link">PROJECTEN</a>
          <a href="${isHomepage ? '#about' : `${siteData.url}#about`}" class="navigation-link">OVER MIJ</a>
          <a href="${isHomepage ? '#contact' : `${siteData.url}#contact`}" class="navigation-link">CONTACT</a>
        </div>
      </nav>
    `;
  }

  const hamburger = document.querySelector('.js-hamburger');
  const hamburgerNav = document.querySelector('.js-hamburger-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerNav.classList.toggle('active');
  });

  const navLink = document.querySelectorAll(".navigation-link");

  navLink.forEach((link) => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburgerNav.classList.remove('active');
  }));
}