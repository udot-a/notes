const {v4} = require("uuid");

/*
Класс для создания элементов БД
 */
export class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = v4();
    this.date = new Date().toGMTString();
  }
}
