export default class Preset {
  constructor(clothArray, name, description) {
    this.clothArray = clothArray;
    this.name = name;
    this.description = description;
    this.date = Date.now();
  }
};