import { renderSection } from './render-section.js'

export const renderSections = (sections) => {
  const cardsContainer = document.querySelector('.cards-container')

  sections.forEach((section) => {
    cardsContainer.innerHTML += renderSection(section)
  })
}
