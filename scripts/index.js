import {projects} from "./data/projects.js";

export function renderProjectGrid() {
  let html = '';

  projects.forEach((project) => {
    html += `
      <div class="project">
        <a href="${project.link}">
          <div class="project-image">
            <img src="${project.image}">
          </div>
          <div class="project-info">
            <h2 class="project-name">${project.name}</h2>
            <p class="project-type">${project.type}</p>
            <p class="project-description">${project.description}</p>
          </div>
        </a>
      </div>
    `;
  });

  document.querySelector('.js-project-grid')
    .innerHTML = html;
}