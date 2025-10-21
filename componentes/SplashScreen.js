import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { auth } from './Firebase'; // importe o auth do firebase 
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
       const timer = setTimeout(() => {
    const user = auth.currentUser;
    if (user) {
      navigation.replace('Home'); // Usuário logado vai pra Home
    } else {
      navigation.replace('Login'); // Se não, vai pra Login
    }
  }, 4000);

  return () => clearTimeout(timer);
    }, [navigation]);
 
    return (
        <View style={styles.splashContainer}>
            <Image
                source={ require('../assets/img_eletro.png') }
                style={styles.splashImage} />
            <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.loader} />
        </View>
    );
};
 
const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
});
 
export default SplashScreen;