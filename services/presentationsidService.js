/**
 * Deletes a presentation or verifiable presentation by ID
 *
 * id id
 * no response value expected for this operation
 * */
export function deletePresentation(_id) {
  return new Promise((resolve, _reject) => {
    resolve();
  });
}

/**
 * Gets a presentation or verifiable presentation by ID
 *
 * id id
 * returns inline_response_200_1
 * */
export function getPresentation(_id) {
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
