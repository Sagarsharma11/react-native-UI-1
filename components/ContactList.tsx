import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Sagar Sharma',
            status: 'Making your G-pay smooth',
            imageUrl: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
        },
        {
            uid: 1,
            name: 'Sagar Sharma',
            status: 'Making your G-pay smooth',
            imageUrl: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
        },
        {
            uid: 1,
            name: 'Sagar Sharma',
            status: 'Making your G-pay smooth',
            imageUrl: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
        },
        {
            uid: 1,
            name: 'Sagar Sharma',
            status: 'Making your G-pay smooth',
            imageUrl: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
        },
        {
            uid: 1,
            name: 'Sagar Sharma',
            status: 'Making your G-pay smooth',
            imageUrl: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
        },
        {
            uid: 1,
            name: 'Sagar Sharma',
            status: 'Making your G-pay smooth',
            imageUrl: 'https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {
                    contacts.map(({ uid, name, status, imageUrl }) => (
                        <View style={styles.userCard}>
                            <Image
                                source={{
                                    uri: imageUrl
                                }}
                                style={
                                    styles.userImage
                                }
                            />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus} >{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom:4,
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:"#8D3DAF",
        padding:6,
        borderRadius:12
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight:14,
    },
    userName: {
        fontSize:16,
        fontWeight:'600',
        color:'white'
    },
    userStatus: {
        fontSize:12,
        color:'#CAD5E2'
    }
})