class TipCalculator {
	static calculateTip(totalBillAmount = 0, percentage = 10) {

		if (isNaN( totalBillAmount ) )totalBillAmount=0;
		if( isNaN( percentage)) percentage=0;

		return totalBillAmount * (percentage / 100);
	}
}
