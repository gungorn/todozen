class Helper {
	JSON2ARRAY = (json, idKey = 'id') => { //{ key: {} } ==> [{key: '', ...{} }]
		const result = [];

		if (json) {
			const keys = Object.keys(json);

			keys.forEach(d => {
				const tmp = { ...json[d] };
				tmp[idKey] = d;

				result.push(tmp);
			});
		}

		return result;
	}
}

export default new Helper();
