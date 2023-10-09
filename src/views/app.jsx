import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import MyApp from './MyApp';
import List from '../List/List';
import Search from '../Search/Search';
import TabBars from './TabBar';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/App" element={<MyApp />} />
        <Route path="/List" element={<List />} />
        <Route path="/Search" element={<Search />} />
        <Route path="*" element={<Navigate to="/App" />}>
          {' '}
        </Route>
      </Routes>
      <TabBars />
    </>
  );
}
