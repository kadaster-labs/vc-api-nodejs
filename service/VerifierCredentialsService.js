'use strict';


/**
 * Verifies a verifiableCredential and returns a verificationResult in the response body.
 * Verifies a verifiableCredential and returns a verificationResult in the response body.
 *
 * body VerifyCredentialRequest Parameters for verifying a verifiableCredential. (optional)
 * returns VerificationResult
 **/
exports.verifyCredential = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "checks" : [ "proof" ],
  "warnings" : [ ],
  "errors" : [ ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

