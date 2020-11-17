import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

import { H } from '../Dimensions';
import Colors from '../Colors.json';

import FONT from '../config/FontConfig';

const RENDER = P => {
	const { text } = P;

	return <Text style={styles.caption}>{text}</Text>;
};

const styles = StyleSheet.create({
	caption: {
		...FONT.L_BOLD,
		paddingTop: H(2),
		paddingBottom: H(1),
		borderBottomWidth: 2,
		borderColor: Colors.black
	},
});

export default RENDER;
