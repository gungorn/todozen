import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

import { W } from '../Dimensions';

import Caption from '../Components/Caption';

import ToDo from './ToDo';


const RENDER = () => {
	useEffect(() => { return () => null; }, []);

	return (
		<View style={styles.container}>
			<Caption text={'TODO'} />

			<View>
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} />
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} />
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} />
				<ToDo todoText={'Nisi proident nisi eiusmod non.'} />
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
