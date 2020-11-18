import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import AddItem from './AddItem';
import ToDos from './ToDos';
import Completed from './Completed';

const RENDER = () => {
	useEffect(() => { return () => null; }, []);

	return (
		<View style={styles.container}>
			<AddItem />
			<ToDos />
			<Completed />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default RENDER;
