/* eslint-disable */
let _seed: number = 0;

export class DataListItem {
  id: number;
  completed: boolean;
  text: string;

  constructor(text: string, completed: boolean) {
    this.id = _seed++;
    this.completed = completed;
    this.text = text;
  }
}
