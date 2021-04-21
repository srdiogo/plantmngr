import React from 'react';

import {
    Text,
    StyleSheet,
    View,
    Image,
    TextProps
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import waterDrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeaderProps extends TextProps {
    title: string;
}

export function Header({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.username}>Diogo</Text>
            </View>

            <Image source={waterDrop} style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    username: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
});