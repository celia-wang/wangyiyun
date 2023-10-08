import axios from "axios";
const http = axios.create({
  baseURL:"https://netease-cloud-music-api-five-roan-88.vercel.app"
})
 
//歌手
const SingerData = () => http.get("/search/hot/detail?cookie=")
//榜单
const TopListData = () => http.get("/toplist/detail")
//  const PlayListData = (params) => http.get("/playlist/detail",{params})
const PlayListData = (params) => http.get("/playlist/detail?id="+params)

// const SoaringListData = () => http.get('/playlist/detail?id=19723756&cookie=');//原创榜
// const SongChartData = () => http.get('/playlist/detail?id=2884035&cookie=');//热歌榜
// const RapchartData = () => http.get('/playlist/detail?id=2884035&cookie=')
//  const ClassicChartData = () => http.get('/playlist/detail?id=3778678&cookie=')

export async function fetchToplistDetail() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(res.data.list.map(({ id }) => http.get('playlist/detail', { params: { id } })));
  return playlist.map(item => item.data.playlist)
}
export {SingerData ,TopListData,PlayListData}