import GardenGuest from 'pages/garden-guest';
import GardenHost from 'pages/garden-host';
import Message from 'pages/message';
import MessageBox from 'pages/message-box';
import Seed from 'pages/seed';
import SeedBag from 'pages/seed-bag';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/'></Route>
    <Route path='host'>
      <Route path='garden' element={<GardenHost />} />
      <Route path='plant' />
      <Route path='message' element={<Message />} />
      <Route path='message-box' element={<MessageBox />} />
    </Route>
    <Route path='guest'>
      <Route path='garden' element={<GardenGuest />} />
      <Route path='seed-bag' element={<SeedBag />} />
      <Route path='seed' element={<Seed />} />
    </Route>
  </Routes>
);

export default AppRoutes;
