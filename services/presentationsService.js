/**
 * Gets list of presentations or verifiable presentations
 *
 * type List  (optional)
 * returns List
 * */
export function getPresentations(_strs) {
  return new Promise((resolve, _reject) => {
    const examples = {};
    examples["application/json"] = ["", ""];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
