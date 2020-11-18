import rdb from '@react-native-firebase/database';
import shortid from 'shortid';
import STRG from './STRG';

class FB {
	constructor() { this.START(); }

	START = async () => {
		this.token = await STRG.getTOKEN(); //token yoksa oluşturur!
	}

	DB = null;
	token = null; //userid

	setTODO = async todo => {
		const todoid = `${shortid()}${shortid()}`;

		let OK = true;

		const todoDATA = { todo, date: new Date().getTime(), deleted: false, completed: false };

		try { await rdb().ref(`/TODOs/${this.token}/${todoid}`).set(todoDATA); }
		catch (e) { OK = false; console.log(e); }

		return OK;
	}


	onTODO = () => {

	}
}

export default new FB();
