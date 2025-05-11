import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { sampleType } from "./sampleType";
import { videoType } from "./videoType";
import { contactType } from "./contactType";
import { projectType } from "./projectType";
import { galleryType } from "./galleryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    sampleType,
    videoType,
    contactType,
    projectType,
    galleryType,
  ],
};
