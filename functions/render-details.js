export const renderDetails = (detail) => {
  return `
    <details>
      <summary>${detail.summary}</summary>
      <p>${detail.content}</p>
      <ol>
        ${detail.list.map((item) => `<li>${item}</li>`).join('')}
      </ol>
    </details>
  `
}
