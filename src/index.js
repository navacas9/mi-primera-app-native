import React from 'react';
// Se envuelven todas las rutas dentro del provider
import { Provider } from 'react-redux';

import Routes from './routes';
import Store from './redux/store'; // se importa desde store

const store = Store(); // se usa la funcion de store

export default () => (
    // se pasa la store que se acaba de crear
    <Provider store={store}> 
        <Routes/>
    </Provider>
);