import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Icon = (props) => {
	const { golgeYok, m, rotate, rotateX, rotateY, style, is, i, s, c } = props;
	const S = [
		!golgeYok && {
			textShadowColor: 'rgba(0, 0, 0, 0.5)',
			textShadowOffset: { width: 1, height: 1 },
			textShadowRadius: 5,
		},
		m && { transform: [{ rotateY: '180deg' }] },
		rotate && { transform: [{ rotate: `${rotate}deg` }] },
		rotateX && { transform: [{ rotateX: `${rotateX}deg` }] },
		rotateY && { transform: [{ rotateY: `${rotateY}deg` }] },
		style
	];


	if (is === 'MCI') return <MaterialCommunityIcons name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'Ionicons') return <Ionicons name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'Foundation') return <Foundation name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'Fontisto') return <Fontisto name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'FA') return <FontAwesome name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'FA5') return <FontAwesome5 name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'MI') return <MaterialIcons name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'Entypo') return <Entypo name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'AD') return <AntDesign name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'Octicons') return <Octicons name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'Feather') return <Feather name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'EvilIcons') return <EvilIcons name={i} size={s || 32} color={c || 'white'} style={S} />;
	else if (is === 'SimpleLineIcons') return <SimpleLineIcons name={i} size={s || 32} color={c || 'white'} style={S} />;

	return null;
}

export default Icon;
