import React from 'react';
import { Container, Content, Text, Grid, Button } from 'native-base';

import styles from './style';

export default function Login(){
    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Text>Bienvenido</Text>
                    <Text>Inicia sesión para continuar</Text>
                    <Button light>
                        <Text>Cuenta de google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
};