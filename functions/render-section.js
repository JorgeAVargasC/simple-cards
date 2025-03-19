import { renderDetails } from './render-details.js'

export const renderSection = (section) => {
  return `
    <section class="card">
      <img src="${section.image.src}" alt="${section.image.alt}">
      <h4>${section.title}</h4>
      <p>${section.description}</p>

      ${section.details.map((detail) => renderDetails(detail)).join('')}
    </section>
  `
}
