/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7F57965D-B116-4A98-BC33-61198ED2F755",variableType:4}
 */
var firstNumber = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7A146598-5816-465D-84D8-6C226EB5BD36",variableType:4}
 */
var secondNumber = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A7C3EED-9148-492A-AD6A-FF72A4F89F66",variableType:4}
 */
var result = 0;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"79149366-6049-4BB4-A9C3-642FCCE65147"}
 */
function add(event) {
	result = firstNumber + secondNumber;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9D3D940C-B2F8-4FF5-AB0A-A3EC00416182"}
 */
function substract(event) {
	result = firstNumber - secondNumber;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7CAD1463-F5EB-4735-A706-9D78986F3FDD"}
 */
function clear(event) {
	firstNumber = secondNumber = result = 0;
}
