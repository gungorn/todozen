import rdb from '@react-native-firebase/database';
import shortid from 'shortid';

import STRG from './STRG';
import Helper from './Helper';

class FB {
	constructor() { this.START(); }

	START = async () => {
		console.time('TOKEN TIME');
		this.token = await STRG.getTOKEN(); //token yoksa oluşturur!
		console.timeEnd('TOKEN TIME');
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


	onTODO = F => {
		try {
			rdb()
				.ref(`/TODOs/${this.token}`)
				.on(
					'value',
					res => {
						const data = Helper.JSON2ARRAY(res.val()), completed = [], incompleted = [];
						data.sort((a, b) => a.data > b.date);

						data.forEach(d => {
							if (d.deleted) { }
							else if (d.completed) completed.push(d);
							else incompleted.push(d);
						});

						F({ completed, incompleted });
					}
				);
		}
		catch (e) { console.log(e); }
	}
}

export default new FB();
