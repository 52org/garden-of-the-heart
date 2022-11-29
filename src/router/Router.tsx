import React from 'react';
import { HashRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';

const Router: React.FC = () => (
  <HashRouter basename='/'>
    <AppRoutes />
  </HashRouter>
);

export default Router;
