export const renderCards = (data) => {
  const cardsContainer = document.querySelector('.cards-container')

  data.forEach((item) => {
    const card = document.createElement('section')
    card.classList.add('card')
    card.innerHTML = `
      <img src="${item.image.src}" alt="${item.image.alt}">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <details>
        <summary>${item.details.summary}</summary>
        <p>${item.details.content}</p>
        <ol>
          ${item.details.list.map((item) => `<li>${item}</li>`).join('')}
        </ol>
      </details>
    `
    cardsContainer.appendChild(card)
  })
}
