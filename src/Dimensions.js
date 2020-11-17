import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const w = Dimensions.get('window').width;
export const h = Dimensions.get('window').height;

export const W = d => w * d / 100;
export const H = d => h * d / 100;

export const sbh = getStatusBarHeight();
export const sbhi = getStatusBarHeight(true);
