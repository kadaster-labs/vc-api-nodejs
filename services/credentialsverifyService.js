/**
 * Verifies a verifiableCredential and returns a verificationResult in the response body.
 *
 * body VerifyCredentialRequest Parameters for verifying a verifiableCredential. (optional)
 * returns VerificationResult
 * */
export function verifyCredential(_body) {
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
}
