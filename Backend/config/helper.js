/** @format */

const helper = {}
helper.response = function (response, status_code, message, data) {
	var ret = {
		responseCode: status_code,
		message: message,
	}
	if (data) {
		Object.assign(ret, data)
	}
	return response.status(status_code).json(ret)
}

module.exports = helper
