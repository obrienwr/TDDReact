import {Book} from "@/app/lib/types";

export const MAX_DESCRIPTION_LENGTH_DEFAULT = 200;

export function descriptionNeedsTruncation(
  description: string, max_length: number = MAX_DESCRIPTION_LENGTH_DEFAULT
): boolean {
  return description.length > max_length;
}

export function getUIFriendlyBookDescription(
  book: Book | undefined, expanded: boolean, max_length: number = MAX_DESCRIPTION_LENGTH_DEFAULT
): string {
  let UIFriendlyBookDescription = "";
  if (book?.description) {
    if (!expanded && descriptionNeedsTruncation(book.description)) {
      UIFriendlyBookDescription = `${book.description.slice(0, max_length)}...`;
    } else {
      UIFriendlyBookDescription = book.description;
    }
  } else if (book){
    UIFriendlyBookDescription = book.name;
  }
  return UIFriendlyBookDescription;
}
