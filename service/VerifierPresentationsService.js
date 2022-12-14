/**
 * Verifies a Presentation with or without proofs attached and returns a verificationResult in the
 * response body.
 *
 * Verifies a verifiablePresentation and returns a verificationResult in the response body.  Given
 * the possibility of denial of service, buffer overflow, or other style attacks, an implementation
 * is permitted to rate limit or restrict requests against this API endpoint to those requests that
 * contain only a single credential with a 413 or 429 error code as appropriate.
 *
 * body Presentations_verify_body Parameters for verifying a verifiablePresentation. (optional)
 * returns VerificationResult
 * */
exports.verifyPresentation = function (_body) {
  return new Promise((resolve, _reject) => {
    const examples = {};
    examples["application/json"] = {
      checks: ["proof"],
      warnings: [],
      errors: [],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
