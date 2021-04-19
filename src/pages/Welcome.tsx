import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            {
                visible &&
                <Image source={wateringImg} style={styles.image} />
            }
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.{'\n'}
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <Button title='Avançar' onPress={handleVisibility} />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        marginTop: 38,
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.heading
    },
    subtitle: {
        textAlign: 'center',
        paddingHorizontal: 20,
        fontSize: 17,
        color: colors.heading
    },
    image: {
        width: 292,
        height: 284
    }
})