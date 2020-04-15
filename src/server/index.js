import axios from 'axios'

export default async function (req, res) {
  try {
    // req は Node.jsのHTTPリクエストオブジェクト
    // console.log(Object.keys(req))
    const result = await axios.get(
      'http://localhost:9300/_cat/nodes?h=ip,port,heapPercent,name'
    )
    console.log(result);
    res.end(null)
  } catch (error) {
    console.error(error)
    res.end(null)
  }
}
