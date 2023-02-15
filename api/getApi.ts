export const getApi = async (url: string,  decoder: (buffer: Uint8Array) => any, query?: string[]) => {
    const baseUrl = "http://153.126.185.116:18080/api/"
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
    const apiUrl = baseUrl + url + querys.join("")
    console.log("api", apiUrl)
    const getData = () => fetch(apiUrl)
      .then(r => {
        if (r.status >= 404) {
          const msg = r.text()
          throw {statusCode: r.status,message: msg }
        }
        if (r.ok) {
          return r.arrayBuffer()
        }
      })
    try {
      const data = await getData()
      const apiData = JSON.parse(JSON.stringify(decoder(new Uint8Array(data))))
      console.log("data:", apiData)
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