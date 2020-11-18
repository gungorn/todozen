import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from 'native-base';

import Colors from '../Colors.json';
import { W } from '../Dimensions';

import Caption from '../Components/Caption';

import ToDo from './ToDo';

const RENDER = P => {
	const { data } = P;

	return (
		<View style={styles.container}>
			<Caption text={'COMPLETED'} color={Colors.gray} opacity={1} />

			<FlatList
				data={data}
				extraData={data}
				renderItem={d => <ToDo todoText={d.item.todo} id={d.item.id} completed />}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: W(3)
	},
});

export default RENDER;
