import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Textarea, Button, View, Text } from 'native-base';

import Colors from '../Colors.json';
import { W, H, sbh } from '../Dimensions';
import FONT from '../config/FontConfig';

import Caption from '../Components/Caption';

const RENDER = () => {
	const [value, setValue] = useState('');

	useEffect(() => { return () => null; }, []);

	return (
		<View style={styles.container}>
			<Caption text={'ADD ITEM'} />

			<View style={styles.inputContainer}>
				<Textarea
					//rowSpan={1}
					//bordered
					style={styles.input}
					value={value}
					onChangeText={d => setValue(d)}
				/>

				<Button hasText transparent onPress={() => alert('test')}>
					<Text uppercase={false} style={styles.addButtonText}>Add</Text>
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: sbh,
		marginHorizontal: W(3)
	},

	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: H(2),
		marginBottom: H(4),
		height: H(6)
	},
	input: {
		flex: 1,
		paddingVertical: 3,
		height: '100%',
		borderRadius: 5,
		textAlignVertical: 'center',
		backgroundColor: Colors.white
	},
	addButtonText: {
		...FONT.M,
		color: Colors.gray,
		width: W(20),
		height: '100%',
		textAlignVertical: 'center',
		textAlign: 'center'
	}
});

export default RENDER;
