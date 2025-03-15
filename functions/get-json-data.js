export const getJSONData = async () => {
  console.log('[getJSONData]: Loading data.json')
  try {
    const res = await fetch('./data.json')
    if (!res.ok) {
      throw new Error('[getJSONData]: Something went wrong loading data.json')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('[getJSONData]:', error)
  }
}
