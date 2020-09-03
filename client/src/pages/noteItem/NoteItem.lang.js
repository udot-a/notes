import {Language} from "../../services";

class Vocabulary {
  constructor(
    back,
    empty
  ) {
    this.back = back;
    this.empty = empty;
  }
}

export const vocabulary = new Language(
  new Vocabulary("Назад", "Элемент пуст!"),
  new Vocabulary("Back", "Element is empty!")
);
