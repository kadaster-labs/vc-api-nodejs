/* eslint-disable import/no-unresolved */
/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
import { securityLoader } from "@digitalbazaar/security-document-loader";
import {
  odrlController,
  odrlDocument,
  v1Controller,
  v1Examples,
} from "./documents.js";

import * as data from "../public/contexts/kadasterCredentials.json" assert { type: "json" };

const loader = securityLoader();

loader.addStatic(
  "http://localhost:8080/contexts/kadasterCredentials.json",
  data.default
);
loader.addStatic(v1Controller, v1Examples);
loader.addStatic(odrlController, odrlDocument);

export const documentLoader = loader.build();
