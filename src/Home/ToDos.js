import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from 'native-base';

import { H, W } from '../Dimensions';

import Caption from '../Components/Caption';

import ToDo from './ToDo';


const RENDER = props => {
	const { data } = props;

	return (
		<View style={styles.container}>
			<Caption text={'TODO'} />

			<FlatList
				data={data}
				extraData={data}
				renderItem={d => <ToDo todoText={d.item.todo} id={d.item.id} />}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: W(3),
		maxHeight: H(50)
	},
});

export default RENDER;
