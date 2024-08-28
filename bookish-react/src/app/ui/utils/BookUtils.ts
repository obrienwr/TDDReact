import {Book} from "@/app/lib/types";

export const MAX_DESCRIPTION_LENGTH = 200;

export function descriptionNeedsTruncation(description: string): boolean {
  return description.length > MAX_DESCRIPTION_LENGTH;
}

export function getUIFriendlyBookDescription(book: Book | undefined, expanded: boolean): string {
  let UIFriendlyBookDescription = "";
  if (book?.description) {
    if (!expanded && descriptionNeedsTruncation(book.description)) {
      UIFriendlyBookDescription = `${book.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`;
    } else {
      UIFriendlyBookDescription = book.description;
    }
  } else if (book){
    UIFriendlyBookDescription = book.name;
  }
  return UIFriendlyBookDescription;
}
