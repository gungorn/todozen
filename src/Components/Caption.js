import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import PropTypes from 'prop-types';

import { H } from '../Dimensions';

import FONT from '../config/FontConfig';
import Colors from '../Colors.json';

import BottomBorder from './BottomBorder';

const RENDER = P => {
	const { text, color, opacity } = P;

	return (
		<View style={{ opacity }}>
			<Text style={[styles.caption, { color }]}>{text}</Text>
			<BottomBorder />
		</View>
	);
};

const styles = StyleSheet.create({
	caption: {
		...FONT.L_BOLD,
		paddingTop: H(2),
		paddingBottom: H(1),
	}
});

RENDER.propTypes = { color: PropTypes.string, opacity: PropTypes.number };
RENDER.defaultProps = { color: Colors.black, opacity: 1 };

export default RENDER;
