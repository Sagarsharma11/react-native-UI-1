import React from "react"

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

function FlatCards(): JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>
                Flat Cards
            </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red Card</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green Card</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue Card</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green Card</Text>
                </View>
            </View>
        </View>)
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card: {
        flex: 0,
        justifyContent:'center',
        alignItems:'center',
        width: 80 ,
        height: 90,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "#50DBB4"
    },
    cardThree: {
        backgroundColor: "#5DA3FA"
    }
});
