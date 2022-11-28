import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: '#f2f2f2',
            paddingHorizontal: 20
        }}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.text}>Dennis Matere</Text>
                </View>
                <Icon name='notifications' size={20} style={{ marginLeft: 130 }} />
                <Icon name='menu' size={20} style={{ marginRight: 10 }} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <Icon name='search' size={20} style={{ marginLeft: 20 }} />
                    <TextInput placeholder='search here' style={styles.Input} />
                    <Icon name='mic' size={20} style={{ marginRight: 10 }} />
                </View>
                <View style={styles.sortBtn}>
                    <Icon name='sort' size={20} style={{ color: '#f2f2f2' }} />
                </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.cardContainer}>
                    <Icon name='local-hospital' size={50} style={{ marginLeft: 10, marginTop: 15, color: '#fff' }} />
                    <Text style={styles.cardText}>Get Vaccinated Now!</Text>
                </View>
                {/* <Text style={{ flexDirection: 'row' }}>Fight against Dangerous Virus, Fight Together.</Text> */}
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View>
                    <Text style={{ color: '#0080ff', fontSize: 20, fontWeight: 'bold' }}>Upcoming Appointments</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.upContainer}>
                    <Text>Doctor</Text>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View>
                    <Text style={{ color: '#0080ff', fontSize: 20, fontWeight: 'bold' }}>Online Consultant</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                <View style={styles.card}>
                    <Text>Consultant</Text>
                </View>
                <View style={styles.card}>
                    <Text>Consultant</Text>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#0080ff',
    },
    header: {
        marginTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
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
    sortBtn: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: '#0080ff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#0080ff',
        height: 80,
        flexDirection: 'row',
    },
    cardText: {
        fontSize: 18,
        flexDirection: 'row',
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
        marginTop: 20
    },
    upContainer: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        borderRadius: 5,
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});