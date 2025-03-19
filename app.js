import { LOG_STYLE } from './constants/log-style.js'
import { getJSONData } from './functions/get-json-data.js'
import { renderSections } from './functions/render-sections.js'

const app = async () => {
  console.log('%cAPP STARTED', LOG_STYLE)

  const data = await getJSONData()
  renderSections(data)

  console.log('%cAPP ENDED', LOG_STYLE)
}

app()
