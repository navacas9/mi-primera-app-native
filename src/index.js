import React, { useState, useEffect } from 'react';
// Se envuelven todas las rutas dentro del provider
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { Spinner } from 'native-base';

import Routes from './routes';
import Store from './redux/store'; // se importa desde store
import { ROBOTO_FONT, ROBOTO_MEDIUM_FONT } from './consts';

const store = Store(); // se usa la funcion de store
const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf');  // Fuentes de native base
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf');

export default () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        loadFonts();
    }, [fontsLoaded]);

    const loadFonts = async () => {
        await Font.loadAsync({
            [ROBOTO_FONT]: ROBOTO,
            [ROBOTO_MEDIUM_FONT]: ROBOTO_MEDIUM
        });

        setFontsLoaded(true);
        
    };

    if (!fontsLoaded) {
        return <Spinner color="red"></Spinner>
    }
    return (
        // se pasa la store que se acaba de crear
        <Provider store={store}> 
            <Routes/>
        </Provider>
    );
}