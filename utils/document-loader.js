/* eslint-disable import/no-unresolved */
/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
import { readFile } from "fs/promises";
import { securityLoader } from "@digitalbazaar/security-document-loader";
import {
  odrlController,
  odrlDocument,
  v1Controller,
  v1Examples,
} from "./documents.js";

const kadaster = JSON.parse(
  await readFile(new URL("../public/keys/kadaster.json", import.meta.url))
);

const loader = securityLoader();

loader.addStatic(kadaster.id, kadaster);
loader.addStatic(v1Controller, v1Examples);
loader.addStatic(odrlController, odrlDocument);

export const documentLoader = loader.build();
