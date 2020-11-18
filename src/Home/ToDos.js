import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { View } from 'native-base';

import { W } from '../Dimensions';

import Caption from '../Components/Caption';

import ToDo from './ToDo';


const RENDER = props => {
	const { data } = props;
	useEffect(() => { return () => null; }, []);

	return (
		<View style={styles.container}>
			<Caption text={'TODO'} />

			<FlatList
				data={data}
				extraData={data}
				renderItem={d => <ToDo todoText={d.item.todo} />}
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
