import axios from "axios"
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app"
})
// 轮播图
 const BannerPic = () => http.get("/homepage/block/page")
//  导航条
const NavData = () => http.get("/homepage/dragon/ball")
//推荐歌单 【1】
const PlayListData = () => http.get("/homepage/block/page?cookkie=200")
//数字专辑[5] 
const CDData = () => http.get("/homepage/block/page?cookkie=200")
//新歌排行榜[3]
const NewSongListData = () => http.get("/homepage/block/page?cookkie=200")
//热门话题[]
const HotTopicData = () => http.get("/topic/detail/event/hot?actid=111551188&cookie=")
//音乐日历
const CalendarData = () => http.get('/calendar?startTime=1677417600000&endTime=1677417600000')

 export {BannerPic,NavData,PlayListData,CDData,NewSongListData,HotTopicData,CalendarData}