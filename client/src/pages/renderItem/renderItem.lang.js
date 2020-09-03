import {Language} from "../../services";

class Vocabulary {
  constructor(noteDelete) {
    this.noteDelete = noteDelete;
  }
}

export const vocabulary = new Language(
  new Vocabulary("Заметка удалена!"),
  new Vocabulary("Note deleted!")
);
