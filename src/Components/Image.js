import React, { useState, useEffect } from 'react';
import { Image, View, ImagePropTypes } from 'react-native';
import PropTypes from 'prop-types';

const IMG = props => {
	const { source, style, resizeMode, onSize } = props;
	let { width, height } = props;

	const [WH, setWH] = useState(null);
	let tmp;

	useEffect(() => {
		if (width && height) setWH({ width, height });
		else if (typeof source === 'object') {
			Image.getSize(source.uri,
				(ow, oh) => {
					tmp = width ? { width, height: width * (oh / ow) } : { width: height * (ow / oh), height };
					setWH(tmp);
					onSize(tmp);
				});
		}
		else {
			const T = Image.resolveAssetSource(source);
			tmp = width ? { width, height: width * (T.height / T.width) } : { width: height * (T.width / T.height), height };
			setWH(tmp);
			onSize(tmp);
		}
	}, [width, height, source]);

	return WH ?
		<Image source={source} style={[WH, style]} resizeMode={resizeMode} /> :
		<View style={{ width, height }} />;
};

IMG.propTypes = { width: PropTypes.number, height: PropTypes.number, onSize: PropTypes.func, ...ImagePropTypes };
IMG.defaultProps = { width: null, height: null, onSize: () => null };

export default IMG;
