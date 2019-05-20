import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {

  number_patterns = [
    [" _ ", "| |", "|_|"],
    ["   ", "  |", "  |"],
    [" _ ", " _|", "|_ "],
    [" _ ", " _|", " _|"],
    ["   ", "|_|", "  |"],
    [" _ ", "|_ ", " _|"],
    [" _ ", "|_ ", "|_|"],
    [" _ ", "  |", "  |"],
    [" _ ", "|_|", "|_|"],
    [" _ ", "|_|", " _|"]
  ];

  constructor() { }


  /**
   * @method getValue
   * @param data Ascii art invoice number.
   * @description Convert Ascii art invoice number into number by matching number pattern.    
   * @return return number value.
   */
  getValue(data) {
    const index = this.number_patterns.findIndex(ele => JSON.stringify(ele) == JSON.stringify(data));
    return (index >= 0) ? index : '?';
  }


  /**
   * @method decryptElement
   * @param ele block of Ascii art invoice numbers.
   * @description Convert Ascii art invoice numbers into number.    
   * @return return number value of block Ascii art invoice number.
   */
  decryptElement(ele) {
    let number = '';
    for (let i = 0; i < 9 * 3; i += 3) {
      let letterArray = []
      letterArray[0] = ele[i] + ele[i + 1] + ele[i + 2];
      letterArray[1] = ele[(28 + i)] + ele[(28 + 1 + i)] + ele[(28 + 2 + i)];
      letterArray[2] = ele[(28 * 2) + i] + ele[(28 * 2) + 1 + i] + ele[(28 * 2) + 2 + i];
      number = number + this.getValue(letterArray);
    }
    return number;
  }

}
