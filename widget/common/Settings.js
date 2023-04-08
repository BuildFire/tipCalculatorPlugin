class Settings extends BFDataAccess {
	constructor(data) {
		super(data);
		this.tag = "Settings";
		this.headerContent = data && data.headerContent || "";
		this.tipLevels = data && data.tipLevels ? data.tipLevels : [
			{ percentage: 0, friendlyName: "you did a terrible job" },
			{ percentage: 10, friendlyName: "you did an ok job" },
			{ percentage: 50, friendlyName: "you did an amazing job!" }
		];
	}

	Validate() {
		const errors = [];

		if (!Array.isArray(this.tipLevels)) {
			errors.push({
				property: 'tipLevels',
				message: 'Tip Levels should be an array.'
			});
		} else {
			if(this.tipLevels.length == 0){
				errors.push({
					property: `tipLevels cannot ve zero length`,
					message: 'You must have at least one tip level.'
				});
			}

			this.tipLevels.forEach((level, index) => {
				if (typeof level.percentage !== 'number' || typeof level.friendlyName !== 'string') {
					errors.push({
						property: `tipLevels[${index}]`,
						message: 'Each tip level should have a percentage (number) and a friendlyName (string).'
					});
				}
			});
		}

		return errors;
	}
}
