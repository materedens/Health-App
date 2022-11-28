import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MessageScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: '#f2f2f2',
            paddingHorizontal: 20
        }}>
            <View style={{ marginTop: 40, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <Icon name='search' size={20} style={{ marginLeft: 20 }} />
                    <TextInput placeholder='search here' style={styles.Input} />
                    <Icon name='mic' size={20} style={{ marginRight: 10 }} />
                </View>
                <View style={styles.sortBtn}>
                    <Icon name='sort' size={20} style={{ color: '#f2f2f2' }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View>
                    <Text style={{ color: '#0080ff', fontSize: 20, fontWeight: 'bold' }}>Active Lists</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                <Image style={{
                    height: 70, width: 70,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}
                    source={require('../assets/about.jpg')} resizeMode='contain' />
                <View>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomRightRadius: 40,
                        borderBottomLeftRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                </View>
                <View>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomRightRadius: 40,
                        borderBottomLeftRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                </View>
                <View>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomRightRadius: 40,
                        borderBottomLeftRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View>
                    <Text style={{ color: '#0080ff', fontSize: 20, fontWeight: 'bold' }}>Messages</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.card}>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                    <Text>Dr. Jackson</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.card}>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                    <Text>Dr. Jackson</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.card}>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                    <Text>Dr. Jackson</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.card}>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                    <Text>Dr. Jackson</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.card}>
                    <Image style={{
                        height: 70, width: 70,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                        source={require('../assets/about.jpg')} resizeMode='contain' />
                    <Text>Dr. Jackson</Text>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default MessageScreen;

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    Input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: '#000000',
    },
    card: {
        flex: 1,
        borderRadius: 5,
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'row',
    }
});