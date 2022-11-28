import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: '#fff',
            paddingHorizontal: 20
        }}>
            <View style={styles.container}>
                <Text>Settings Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});