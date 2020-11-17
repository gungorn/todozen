import React from 'react';
import { View, Image } from 'react-native';

const RENDER = props => {
	const { arkaplan, opacity, source, resizeMode } = props;

	return (
		<View style={{ backgroundColor: arkaplan, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
			<Image
				source={source}
				style={{ opacity: opacity, width: '100%', height: '100%' }}
				resizeMode={resizeMode || 'cover'}
			/>

		</View>
	);
};

export default RENDER;
