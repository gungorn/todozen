import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as ANM from 'react-native-animatable';

import Image from '../Components/Image';

import { logo } from '../Assets';
import { W } from '../Dimensions';

const RENDER = () => {
	useEffect(() => { return () => null; }, []);

	return (
		<ANM.View animation={'fadeIn'} duration={1500} style={styles.container}>
			<Image source={logo} width={W(60)} />
		</ANM.View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default RENDER;
