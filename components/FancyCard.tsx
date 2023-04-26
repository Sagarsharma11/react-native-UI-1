import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Tranding Places</Text>
            <View style={[styles.card, styles.cardEleveted]}>
                <Image
                    source={{
                        uri: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/mumbai-meri-jaan-manjiri-kanvinde.jpg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>
                        Mumbai Skyline
                    </Text>
                    <Text style={styles.cardLabels}>
                        Mumbai Maharastra
                    </Text>
                    <Text style={styles.cardDescription}>
                    Mumbai (formerly called Bombay) is a densely
                     populated city on India’s west coast. 
                     A financial center, it's India's largest city.
                      On the Mumbai Harbour waterfront stands the iconic Gateway
                       of India stone arch, built by the British Raj in 1924.
                    </Text>
                    <Text style={styles.cardFooter}>
                        are you excited
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    card: {
        width:380,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardEleveted: {
        backgroundColor:"#1f1f1f",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabels:{
        color:'#fff',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#CAD5E2',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1 
    },
    cardFooter:{
        color:'#fff'
    }
})