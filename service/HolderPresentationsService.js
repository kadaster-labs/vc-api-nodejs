'use strict';


/**
 * Deletes a presentation or verifiable presentation by ID
 *
 * id id 
 * no response value expected for this operation
 **/
exports.deletePresentation = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets a presentation or verifiable presentation by ID
 *
 * id id 
 * returns inline_response_200_1
 **/
exports.getPresentation = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets list of presentations or verifiable presentations
 *
 * type List  (optional)
 * returns List
 **/
exports.getPresentations = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Proves a presentation and returns it in the response body.
 * Proves a presentation and returns it in the response body.
 *
 * body ProvePresentationRequest Parameters for proving the presentation. (optional)
 * returns ProvePresentationResponse
 **/
exports.provePresentation = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "verifiablePresentation" : {
    "@context" : [ "https://www.w3.org/2018/credentials/v1", "https://www.w3.org/2018/credentials/examples/v1" ],
    "holder" : "did:example:123",
    "type" : "VerifiablePresentation",
    "verifiableCredential" : [ {
      "@context" : [ "https://www.w3.org/2018/credentials/v1", "https://www.w3.org/2018/credentials/examples/v1" ]
    }, {
      "id" : "http://example.gov/credentials/3732"
    }, {
      "type" : [ "VerifiableCredential", "UniversityDegreeCredential" ]
    }, {
      "issuer" : "did:example:123"
    }, {
      "issuanceDate" : "2020-03-16T22:37:26.544Z"
    }, {
      "credentialSubject" : {
        "id" : "did:example:123",
        "degree" : {
          "type" : "BachelorDegree",
          "name" : "Bachelor of Science and Arts"
        }
      }
    }, {
      "proof" : {
        "type" : "Ed25519Signature2018",
        "created" : "2020-04-02T18:28:08Z",
        "verificationMethod" : "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose" : "assertionMethod",
        "jws" : "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    } ],
    "proof" : {
      "type" : "Ed25519Signature2018",
      "created" : "2020-04-02T18:28:08Z",
      "verificationMethod" : "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose" : "assertionMethod",
      "jws" : "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

