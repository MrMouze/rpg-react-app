import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/global.css';

import Start from './pages/Start';
import ConfigFirebase from './pages/ConfigFirebase';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Start} />
            <Route path="/configfirebase" component={ConfigFirebase} />
        </BrowserRouter>
    );
}

export default Routes;