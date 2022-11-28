import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const AccountScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: '#fff',
            paddingHorizontal: 20
        }}>
            <View style={styles.container}>
                <Text>Accounts Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});