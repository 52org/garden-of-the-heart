import CreateOwner from 'pages/create-owner';
import Home from 'pages/home';
import Message from 'pages/message';
import MessageBox from 'pages/message-box';
import MessageForm from 'pages/message-form';
import Plant from 'pages/plant/Plant';
import Seed from 'pages/seed';
import SeedBag from 'pages/seed-bag';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CheckingUuid from './componenets/CheckingUuid';
import GardenGuestPage from './componenets/GardenGuestPage';
import GardenHostPage from './componenets/GardenHostPage';
import GuestDefaultTemplate from './componenets/GuestDefaultTemplate';
import HostDefaultTemplate from './componenets/HostDefaultTemplate';
import Redirect from './componenets/Redirect';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<CheckingUuid />}>
      <Route path='/' element={<HostDefaultTemplate />}>
        <Route path='plant/:letterId' element={<Plant />} />
        <Route path='messagebox' element={<MessageBox />} />
        <Route path='message/:letterId' element={<Message />} />
      </Route>
      <Route path='/' element={<GuestDefaultTemplate />}>
        <Route path='seedbag' element={<SeedBag />} />
        <Route path='seed/:plantName' element={<Seed />} />
        <Route path='messageform/:plantName' element={<MessageForm />} />
      </Route>
      <Route path='/*' element={<Redirect to='/home' />} />
    </Route>
    <Route path='home' element={<Home />} />
    <Route path='create-owner' element={<CreateOwner />} />
    <Route path='host/garden/:uuid' element={<GardenHostPage />} />
    <Route path='guest/garden/:uuid' element={<GardenGuestPage />} />
    <Route path='*' element={<Redirect to='/home' />} />
  </Routes>
);

export default AppRoutes;
