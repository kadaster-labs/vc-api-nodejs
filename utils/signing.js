/* eslint-disable import/no-unresolved */

// Required to set up a suite instance with private key
import { Ed25519Signature2020 } from "@digitalbazaar/ed25519-signature-2020";
import { Ed25519VerificationKey2020 } from "@digitalbazaar/ed25519-verification-key-2020";
import jsigs from "jsonld-signatures";

import { documentLoader } from "./document-loader.js";

const {
  purposes: { AssertionProofPurpose },
} = jsigs;

export async function signCredential(issuer, unsignedCredential) {
  const keyPair = await Ed25519VerificationKey2020.generate({
    controller: issuer.controller,
    // Make sure the keyPair.publicKeyMultibase is updated in issuer.json
    seed: Buffer.alloc(32).fill(issuer.seed),
  });

  console.log(
    `generated keypair with\npublic key:\n${keyPair.publicKeyMultibase}\nand private key:\n${keyPair.privateKeyMultibase}`
  );

  const suite = new Ed25519Signature2020({ key: keyPair });
  suite.date = new Date();

  const signedCredential = await jsigs.sign(unsignedCredential, {
    suite,
    purpose: new AssertionProofPurpose(),
    documentLoader,
  });

  return signedCredential;
}
