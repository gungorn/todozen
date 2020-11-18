import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import PropTypes from 'prop-types';
import Colors from '../Colors.json';

const RENDER = P => {
	const { height } = P;
	return (
		<View style={[styles.bottomBorderContainer, { height }]}>
			<View style={{ width: '20%', height: '100%', backgroundColor: Colors.C5, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
			<View style={{ width: '20%', height: '100%', backgroundColor: Colors.C2 }} />
			<View style={{ width: '20%', height: '100%', backgroundColor: Colors.C3 }} />
			<View style={{ width: '20%', height: '100%', backgroundColor: Colors.C1 }} />
			<View style={{ flex: 1, height: '100%', backgroundColor: Colors.C4, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} />
		</View>
	);
};

const styles = StyleSheet.create({
	bottomBorderContainer: {
		flexDirection: 'row',
		width: '100%'
	}
});


RENDER.propTypes = { height: PropTypes.number };
RENDER.defaultProps = { height: 3 };

export default RENDER;
