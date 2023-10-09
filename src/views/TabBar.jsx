import React from 'react';
import { TabBar, Badge } from 'antd-mobile';
import {
  AppOutline,
  UserOutline,
  HistogramOutline,
  TeamFill,
  HeartOutline
} from 'antd-mobile-icons';
import { useNavigate } from 'react-router';

export default function TabBars() {
  const tabs = [
    {
      key: '/App',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot
    },
    {
      key: '/List',
      title: '排行榜',
      icon: <HistogramOutline />,
      badge: '5'
    },

    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />
    },
    {
      key: 'message',
      title: '关注',
      icon: <HeartOutline />,
      badge: '99+'
    },
    {
      key: 'personalCenter1',
      title: '社区',
      icon: <TeamFill />
    }
  ];

  const navigateTo = useNavigate();

  const setRouteActive = (value) => {
    navigateTo(value);
  };
  return (
    <TabBar
      onChange={(value) => setRouteActive(value)}
      className="fixed left-0 bottom-0 w-[100%] bg-[#fff] h-[12vw]"
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}
