import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-polo',
  templateUrl: './marco-polo.component.html',
  styleUrls: ['./marco-polo.component.css']
})
export class MarcoPoloComponent implements OnInit {


  convertedValue;
  constructor() { }

  ngOnInit() {
  }


  /**
   * @method onChange
   * @param number number entered by user in Input Field.
   * @description conver number into marcopolo.    
   * @return {void}
   */
  onChange(number) {
    var value = '';
    for (var i = 1; i <= number; i++) {
      if (i % 4 === 0 && i % 7 === 0)
        value += 'marcopolo'
      else if (i % 4 === 0)
        value += 'marco'
      else if (i % 7 === 0)
        value += 'polo'
      else
        value += i;
      value += ',';
    }
    value = value.substring(0, value.length - 1);
    this.convertedValue = value
  }

}
