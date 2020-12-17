import React, { useEffect } from 'react';
import { Spinner, Container, Content, Grid } from 'native-base';

import { LOGIN } from '../../consts';
import styles from './style';

export default ({ navigation }) => {
    useEffect(() => {
        navigation.navigate(LOGIN);
    });
    return (
        <Container>
            <Content contentContainerStyle={ styles.content }>
                <Grid style={styles.grid }>
                    <Spinner color="red"></Spinner>
                </Grid>
            </Content>
        </Container>
    );
};