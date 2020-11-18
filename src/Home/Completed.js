import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

import Colors from '../Colors.json';
import { W } from '../Dimensions';

import Caption from '../Components/Caption';

import ToDo from './ToDo';

const RENDER = () => {
	useEffect(() => { return () => null; }, []);

	return (
		<View style={styles.container}>
			<Caption text={'COMPLETED'} color={Colors.gray} />

			<View>
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} completed />
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} completed />
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} completed />
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} completed />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: W(3)
	},
});

export default RENDER;
