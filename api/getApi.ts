export const getApi = async (url: string, query?: string[]) => {
    const baseUrl = "http://w-lu.net:18080/api/"
    let querys = []
    query?.map((v, i) => {
        let w = ""
        if (i===0) {
            w = "?" + v
        } else {
            w = "&" + v
        }
        querys.push(w)
    }) 
    const format = query?.length > 0? "&format=json": "?format=json"
    const apiUrl = baseUrl + url + querys.join("") + format
    console.log("api", apiUrl)
    const getData = () => fetch(apiUrl)
      .then(r => {
        if (r.status >= 404) {
          const msg = r.text()
          throw {statusCode: r.status,message: msg }
        }
        if (r.ok) {
          return r.json()
        }
      })
    try {
      const data = await getData()
      const apiData = JSON.parse(JSON.stringify(data))
      return {
        data: apiData,
        error: null
      }
    } catch (e) {
      return {
        data: null,
        error: {statusCode: 404}
      }
    }
}