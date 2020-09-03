import {Language} from "../../services";

class Vocabulary {
  constructor(
    formNameCreate,
    formNameEdit,
    name,
    namePlaceholder,
    text,
    textPlaceholder,
    save,
    cancel,
    noteCreate,
    noteUpdate
  ) {
    this.formNameCreate = formNameCreate;
    this.formNameEdit = formNameEdit;
    this.name = name;
    this.namePlaceholder = namePlaceholder;
    this.text = text;
    this.textPlaceholder = textPlaceholder;
    this.save = save;
    this.cancel = cancel;
    this.noteCreate = noteCreate;
    this.noteUpdate = noteUpdate;
  }
}

export const vocabulary = new Language(
  new Vocabulary(
    "Создание заметки",
    "Редактирование заметки",
    "Название",
    "Введите название заметки...",
    "Содержание",
    "Введите текст заметки...",
    "Сохранить",
    "Отмена",
    "Заметка создана!",
    "Заметка обновлена!"
  ),
  new Vocabulary(
    "Create note",
    "Edit note",
    "Name",
    "Type name here...",
    "Text",
    "Type text here...",
    "Save",
    "Cancel",
    "Note create!",
    "Note update!"
  )
);
