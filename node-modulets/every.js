const arrayConverter = require("./arrayConverter");
/**
 * @param {Array} array
 * @param {import("./arrayConverter").AsyncArrayIteratorBooleanFunction} asyncFunction
 * @returns {Promise<boolean>}
 * @async
 */
module.exports = exports = async function asyncEvery(array, asyncFunction) {
    array = arrayConverter(array);
    let didAnyFail = false;
    for (let i = 0; i < array.length; i++) {
        didAnyFail = !(await asyncFunction(array[i], i, array));
        if (didAnyFail) {
            break;
        }
    }
    return !didAnyFail;
};