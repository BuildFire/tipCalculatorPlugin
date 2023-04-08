class TipCalculator {
	static calculateTip(totalBillAmount, percentage) {
		if (typeof totalBillAmount !== 'number' || typeof percentage !== 'number') {
			throw new Error('Both totalBillAmount and percentage should be numbers.');
		}
		return totalBillAmount * (percentage / 100);
	}
}
