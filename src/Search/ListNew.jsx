import React, { useEffect, useState } from "react";
import { TopListData, PalyListData } from "../AxiosData/SearchData"
import { Swiper } from "antd-mobile";
import Card from "./Card";
import { fetchToplistDetail } from "../AxiosData/SearchData";
export default function ListNew() {
  const [topList,setTopList] = useState([])
  useEffect(() => {
    TopListData().then( data => setTopList(data.data.list)).catch(err => console.log(err))
  },[])
  // console.log(topList.slice(0,4));
  // const [palyListId, setPalyListId] = useState([]);
  // useEffect(() => {
  //   TopListData()
  //     .then((res) => {
  //        console.log( res.data.list);
  //       return Promise.all(res.data.list.slice(0, 4).map((item) =>  PalyListData(item.id)))
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // setPalyListId(res.map(item => {
  //       //   // console.log(item);
  //       //   return item.data
  //       // }))
  //     })
  //     .catch((err) => { console.log(err)})
  // })
  // useEffect(() => {
  //   fetchToplistDetail()
  //     .then((res) => console.log(res.slice(0, 10)))
  //     .catch((err) => console.log(err));
  // }, []);
  return topList.slice(0,4).map((vul) => 
  <Swiper.Item> 
  <Card id={vul.id} name={vul.name} />
  </Swiper.Item>
  ) 
  
}