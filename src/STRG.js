import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';

class STRG {
	setTOKEN = async () => {
		const token = `${new Date().getTime()}${shortid()}${shortid()}`;

		try { await AsyncStorage.setItem('token', token); }
		catch (e) { console.log(e); }

		return token;
	}

	getTOKEN = async () => {
		let token;

		//token yoksa ya da getirilemezse
		const onError = async () => { return await this.setTOKEN(); }

		//token getir
		try { token = await AsyncStorage.getItem('token'); }
		catch (e) { token = await onError(); console.log(e); }

		//token boş
		if (!token) token = await onError();

		return token;
	}
}

export default new STRG();
