import {Language} from "../services";

class Vocabulary {
  constructor(
    pageTitle,
    documentTitle
  ) {
    this.pageTitle = pageTitle;
      this.documentTitle = documentTitle;
  }
}

export const vocabulary = new Language(
  new Vocabulary("Заметки", "Заметки"),
  new Vocabulary("Notes", "Notes")
);
