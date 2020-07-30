module.exports = {
    getResultSuccess(data, okmsg = "success") {
		return {
			status: 1,
			msg: okmsg,
			data: data || null,
		};
    },
    getResultFiled(data, failmsg = "FAIL") {
		return {
			status: 0,
			msg: failmsg,
			data: data || null,
		};
	}
}