import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Textarea, Button, View } from 'native-base';
import CheckBox from '@react-native-community/checkbox';
//import CheckBox from '@react-native-community/checkbox';

import Colors from '../Colors.json';
import { W, H } from '../Dimensions';
import FONT from '../config/FontConfig';
import FB from '../FB';

const RENDER = P => {
	const { todoText, completed, id } = P;

	const [edit, setEdit] = useState(false);
	const [todoTextEdit, setTodoTextEdit] = useState(todoText);
	const [todoText_, setTodoText_] = useState(todoText);
	const [checked, setChecked] = useState(completed);


	const editOnPress = () => {
		setEdit(false);
		FB.editTODO(id, todoTextEdit);
	};

	return (
		<TouchableOpacity style={styles.container} onLongPress={() => setEdit(true)} activeOpacity={0.8}>
			{!edit &&
				<View style={styles.checkBoxK}>
					<CheckBox value={completed} onValueChange={d => FB.completeTodo(id, d)} style={styles.checkBox} />
				</View>
			}
			{(edit && !completed) ?
				<>
					<Textarea
						style={styles.input}
						value={todoTextEdit}
						onChangeText={d => { setTodoTextEdit(d); setTodoText_(d); }}
						returnKeyType={'done'}
						blurOnSubmit
					/>

					<Button hasText transparent onPress={editOnPress}>
						<Text uppercase={false} style={styles.saveButtonText}>Save</Text>
					</Button>
				</>
				:
				<>
					<Text style={[styles.todoText, completed && { ...FONT.S, textDecorationLine: 'line-through', color: Colors.gray }]}>{todoText_}</Text>
					<Button hasText transparent onPress={() => FB.deleteTodo(id)}>
						<Text uppercase={false} style={styles.delButtonText}>Del</Text>
					</Button>
				</>
			}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: H(2),
		marginBottom: H(2),
		alignItems: 'center'
	},

	checkBoxK: { width: W(12) },
	checkBox: {},


	todoText: {
		flex: 1,
		textAlignVertical: 'center',
	},


	saveButtonText: {
		...FONT.M,
		color: Colors.gray,
		width: W(20),
		height: '100%',
		textAlignVertical: 'center',
		textAlign: 'center'
	},
	delButtonText: {
		...FONT.S,
		color: Colors.gray,
		width: W(20),
		height: '100%',
		textAlignVertical: 'center',
		textAlign: 'center'
	},


	input: {
		flex: 1,
		paddingVertical: 3,
		height: '100%',
		borderRadius: 5,
		textAlignVertical: 'center',
		backgroundColor: Colors.white
	},
});

export default RENDER;
