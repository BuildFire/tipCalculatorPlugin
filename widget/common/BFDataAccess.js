class BFDataAccess {
	constructor(data) {
		this.tag = this.name
		if (data) {
			Object.assign(this, data);
		}
	}
	Validate() {
		return [];
	}
	Load( callback) {
		buildfire.datastore.get( this.tag, (err, result) => {
			if (err) {
				callback(err);
				return;
			}

			if(result && result.data) {
				Object.assign(this, result.data);
				callback(null, result.data);
			}
			else callback(null, null);
		});
	}
	Save(callback) {
		const errors = this.Validate();
		if (errors.length > 0) {
			callback(errors);
			return;
		}

			buildfire.datastore.save( this, this.tag, err => {
				if (err) {
					callback(err);
					return;
				}
				callback(null, this);
			});

	}

}
