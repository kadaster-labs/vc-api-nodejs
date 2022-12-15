/**
 * Deletes a credential or verifiable credential by ID
 *
 * id id
 * no response value expected for this operation
 * */
export function deleteCredential(_id) {
  return new Promise((resolve, _reject) => {
    resolve();
  });
}

/**
 * Gets a credential or verifiable credential by ID
 *
 * id id
 * returns inline_response_200
 * */
export function getCredential(_id) {
  return new Promise((resolve, _reject) => {
    const examples = {};
    examples["application/json"] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
