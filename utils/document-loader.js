/* eslint-disable import/no-unresolved */
/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
import { securityLoader } from "@digitalbazaar/security-document-loader";
import {
  controller,
  kadasterPublickey,
  odrlController,
  odrlDocument,
  v1Controller,
  v1Examples,
} from "./documents.js";

const loader = securityLoader();

loader.addStatic(controller, kadasterPublickey);
loader.addStatic(v1Controller, v1Examples);
loader.addStatic(odrlController, odrlDocument);

export const documentLoader = loader.build();
