import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Culpa facere in aut deleniti
                        et facilis tenetur ut iste
                        iusto minus amet nobis voluptas
                        totam aperiam molestiae assumenda,
                        aspernatur ab? Soluta.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.socialLinks}
                        onPress={() => openWebsite('https://enlear.academy/7-new-javascript-features-in-ecmascript-2022-64a330f6eae2')}
                    >
                        <Text  >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.socialLinks}
                    >
                        <Text>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card: {
        width:376,
        height:340,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard: {
        backgroundColor:'#51E1ED',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'red',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        fontWeight:'bold',
        fontSize:16
    },
    cardImage: {
        height: 180
    },
    bodyContainer: {
        padding:10
    },
    socialLinks: {
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:6
    },
    footerContainer: {
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
})