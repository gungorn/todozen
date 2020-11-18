import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Textarea, Button, View, Text, Icon } from 'native-base';
import Swipeable from 'react-native-swipeable';
import CheckBox from '@react-native-community/checkbox';

import Colors from '../Colors.json';
import { W, H } from '../Dimensions';
import FONT from '../config/FontConfig';

let SwiperREF;

const Buttons = (setEdit) => {
	return (
		<View style={styles.buttonsContainer}>
			<View style={styles.buttonsSubcontainer}>
				{DeleteButton()}
				{EditButton(setEdit)}
			</View>
		</View>
	);
};
const DeleteButton = () => {
	return (
		<Button hasText transparent>
			<Text style={styles.buttonText}>Del</Text>
		</Button>
	);
};
const EditButton = (setEdit) => {
	return (
		<Button hasText transparent onPress={() => setEdit(true)}>
			<Text style={styles.buttonText}>Edit</Text>
		</Button>
	);
};


const RENDER = P => {
	const { todoText, completed } = P;

	const [edit, setEdit] = useState(false);
	const [todoTextEdit, setTodoTextEdit] = useState(todoText);
	const [checked, setChecked] = useState(completed);

	useEffect(() => { return () => null; }, []);

	return (
		<Swipeable
			leftButtons={completed ? undefined : [Buttons(setEdit)]}
			leftButtonWidth={W(25)}
			onRef={d => (SwiperREF = d)}
		>
			<View style={styles.container}>
				{
					!edit &&
					<View style={styles.checkBoxK}>
						<CheckBox
							value={checked}
							onChange={() => null}
							style={styles.checkBox}
						/>
					</View>
				}

				{
					edit
						?
						<>
							<Textarea style={styles.input} value={todoTextEdit} onChangeText={d => setTodoTextEdit(d)} />

							{
								todoTextEdit !== todoText &&
								<Button hasText transparent onPress={() => alert('test')}>
									<Text uppercase={false} style={styles.saveButtonText}>Save</Text>
								</Button>
							}
						</>
						:
						<>
							<Text style={[styles.todoText, completed && { textDecorationLine: 'line-through', color: Colors.gray }]}>{todoText}</Text>

							{
								completed &&
								<Button hasText transparent onPress={() => alert('test')}>
									<Text uppercase={false} style={styles.saveButtonText}>Del</Text>
								</Button>
							}
						</>
				}
			</View>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: H(2),
		marginBottom: H(2)
	},

	checkBoxK: {
		width: W(12)
	},
	checkBox: {
	},

	todoText: {
		flex: 1,
		textAlignVertical: 'center'
	},

	buttonsContainer: {
		height: '100%',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: W(2)
	},
	buttonsSubcontainer: {
		backgroundColor: Colors.black,
		height: '80%',
		width: W(30),
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		paddingHorizontal: W(5),
		paddingLeft: W(10),
		borderRadius: 5
	},
	buttonText: {
		...FONT.S_BOLD,
		color: Colors.white
	},

	saveButtonText: {
		...FONT.M,
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
