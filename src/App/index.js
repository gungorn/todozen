import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { View } from 'native-base';

import Splash from '../Splash';
import Home from '../Home';

import Background from '../Components/Background';
import { splashback } from '../Assets';


const RENDER = () => {
	const [splash, setSplash] = useState(true);

	useEffect(() => {
		setTimeout(() => setSplash(false), 2000);

		return () => null;
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
			<Background source={splashback} opacity={0.4} />
			{splash ? <Splash /> : <Home />}
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});


export default RENDER;
