import { getJSONData } from './functions/get-json-data.js'
import { renderCards } from './functions/render-cards.js'

const app = async () => {
  console.log('APP STARTED')

  const data = await getJSONData()
  renderCards(data)

  console.log('APP ENDED')
}

app()
