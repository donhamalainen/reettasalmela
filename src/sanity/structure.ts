import type { StructureResolver } from "sanity/structure";
import {
  MdContactMail,
  MdArticle,
  MdWork,
  MdPhotoLibrary,
  MdVideocam,
} from "react-icons/md";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Reetta Portfolio")
    .items([
      S.documentTypeListItem("contact")
        .title("Yhteystiedot")
        .icon(MdContactMail)
        .child(
          S.document().schemaType("contact").documentId("singleton-contact")
        ),
      S.divider(),
      S.documentTypeListItem("sample").title("Juttunäytteet").icon(MdArticle),
      S.documentTypeListItem("project").title("Projektit").icon(MdWork),
      S.documentTypeListItem("gallery")
        .title("Kuvagalleria")
        .icon(MdPhotoLibrary),
      S.documentTypeListItem("video").title("Videot").icon(MdVideocam),
      // Filter out the default document types
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["sample", "project", "gallery", "video", "contact"].includes(
            item.getId()!
          )
      ),
    ]);
