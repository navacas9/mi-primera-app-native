import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Grid, Button } from 'native-base';

import styles from './style';

const GOOGLE_IMAGE = require('../../../assets/google-icon.png');

export default function Login(){
    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Text style={ styles.title }>Bienvenido</Text>
                    <Text style={ styles.subtitle }>Inicia sesión para continuar</Text>
                    <Button light style={ styles.googleBtn }>
                        <Image source={GOOGLE_IMAGE} style={styles.googleIcon}></Image>
                        <Text>Cuenta de google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
};