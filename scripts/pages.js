import { getProject} from "./data/projectData.js";

export function renderPage() {
  const mainContainer = document.querySelector('.js-main-container');
  const projectId = Number(mainContainer.id);
  const currentProject = getProject(projectId);

  pageHTML();
  function pageHTML() {
    let html = `
      <div class="back-button">
        <a href="https://antonimagendans.nl/#projects"><i class="fa-solid fa-caret-left"></i>Terug</a>
      </div>

      <section class="intro-section">
        <div class="video-container">
          <iframe class="video" src=${currentProject.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <span class="divider"></span>
        <div class="project-info">
          <h1 class="project-name">${currentProject.data.name}</h1>
          <div class="subtitle-container"><span class="subtitle"><i class="fa-solid fa-caret-right"></i>Cliënt</span>${currentProject.data.client}</div>
          <div class="subtitle-container"><span class="subtitle"><i class="fa-solid fa-caret-right"></i>Type</span>${currentProject.data.type}</div>
          <div class="subtitle-container"><span class="subtitle"><i class="fa-solid fa-caret-right"></i>Jaar</span>${currentProject.data.year}</div>
        </div>
      </section>

      <section class="context-section">
        <h2>Context</h2>
        ${currentProject.context}
      </section>

      <section class="result-section">
        <div class="result-text">
          <h2>Resultaat</h2>
          ${currentProject.result}
        </div>
        <div class="result-images">
          ${renderResultsImages(currentProject)}
        </div>
        <div class="popup-image">
          <span>&times;</span>
          <img src="">
        </div>
      </section>
    `;

    mainContainer.innerHTML = html;
  }

  function renderResultsImages(project) {
    let html = '';

    for (let i = 0; i < project.images.length; i++) {
      html += `
        <div class="image">
          <img src=${project.images[i]}>
          <div class="image-description">${project.imageDescriptions[i]}</div>
        </div>
      `;
    }

    return html;
  }

  document.querySelectorAll(".result-images img").forEach((image) => {
    image.onclick = () => {
      document.querySelector(".popup-image").style.display = 'block';
      document.querySelector(".popup-image img").src = image.getAttribute('src');
    }
  })

  document.querySelector(".popup-image span").onclick = () => {
      document.querySelector(".popup-image").style.display = 'none'; 
  }
}