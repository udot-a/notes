import {Language} from "../../services";

class Vocabulary {
  constructor(
    emptyList,
    addNoteBtn,
    listDate,
    listName
  ) {
    this.emptyList = emptyList;
    this.addNoteBtn = addNoteBtn;
    this.listDate = listDate;
    this.listName = listName;
  }
}

export const vocabulary = new Language(
  new Vocabulary(
    "Список заметок пуст!",
    "Добавить заметку",
    "Дата",
    "Название"
  ),

  new Vocabulary(
    "Lis of notes is empty!",
    "Add note",
    "Date",
    "Name"
  )
);
