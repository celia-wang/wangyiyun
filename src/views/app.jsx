import React from "react";

import { TabBar, Badge } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import MyApp from "./MyApp";
import List from "../List/List";
import Search from "../Search/Search";
import TabBars from "./TabBar";

const tabs = [
  {
    key: "App",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "List",
    title: "排行榜",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "message",
    title: "消息",
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
  },
  {
    key: "personalCenter",
    title: "我的",
    icon: <UserOutline />,
  },
  {
    key: "personalCenter",
    title: "我的",
    icon: <UserOutline />,
  },
];

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/App" element={<MyApp />}></Route>
        <Route path="/List" element={<List />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="*" element={<Navigate to={"/App"} />}>
          {" "}
        </Route>
      </Routes>
      <TabBars />
    </>
  );
}
