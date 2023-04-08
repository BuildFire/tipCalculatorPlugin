class TipHistory {
	constructor(data) {
		this.tag = "TipHistory";
		if (data) {
			Object.assign(this, data);
		}
	}

	save(callback) {
		buildfire.publicData.insert(this, this.tag, (err, result) => {
			if (err) {
				callback(err);
				return;
			}
			this._id = result.id;
			callback(null, this);
		});
	}

	static getHistoricalRecords(pageIndex, pageSize, callback) {
		const options = {
			filter: {},
			sortBy: { _buildfire: { createdAt: -1 } },
			page: pageIndex,
			pageSize: pageSize
		};

		buildfire.publicData.search(options, this.tag, (err, results) => {
			if (err) {
				callback(err);
				return;
			}
			callback(null, results);
		});
	}
}
