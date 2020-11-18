import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

import AddItem from './AddItem';
import ToDos from './ToDos';
import Completed from './Completed';
import FB from '../FB';
import { h, w } from '../Dimensions';

const RENDER = () => {
	const [todoData, setTodoData] = useState({ incompleted: [], completed: [] });

	useEffect(() => {
		FB.onTODO(d => setTodoData(d));
		return () => null;
	}, []);

	return (
		<View style={styles.container}>
			<AddItem />

			<ToDos data={todoData.incompleted} />
			<Completed data={todoData.completed} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: w,
		height: h
	}
});

export default RENDER;
