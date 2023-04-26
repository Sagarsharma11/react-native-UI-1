import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'

function ElevetedCard(): JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>
                Eleveted Cards
            </Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardEleveted]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.cardEleveted]}>
                    <Text>
                        me 
                    </Text>
                </View>
                <View style={[styles.card, styles.cardEleveted]}>
                    <Text>
                        to
                    </Text>
                </View>
                <View style={[styles.card, styles.cardEleveted]}>
                    <Text>
                        scroll
                    </Text>
                </View>
                <View style={[styles.card, styles.cardEleveted]}>
                    <Text>
                        more ...
                    </Text>
                </View>
                <View style={[styles.card, styles.cardEleveted]}>
                    <Text>
                        😊
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevetedCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardEleveted: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'red',
    }
});