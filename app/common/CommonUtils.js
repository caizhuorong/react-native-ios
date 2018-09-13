'use strict';

export function NaviGoBack(navigator) {
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		navigator.pop();
		return true;
  }
  return false;
}
export function isEmptyObject(obj) {
	for (var name in obj) {
		return false;
	}
	return true;
}
export function isPhoneNumber (phoneNumber) {
    const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(phoneNumber);
};
