import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-parse-invoice',
  templateUrl: './parse-invoice.component.html',
  styleUrls: ['./parse-invoice.component.css']
})
export class ParseInvoiceComponent {
  textArray = [];
  constructor(private characterService: CharacterService) {

  }


  /**
   * @method fileUpload
   * @param event event form Input Field.
   * @description Read Ascii art invoice numbers from text file and send it to decrypt.    
   * @return {void}
   */
  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => {
      this.decryptTextData(reader.result);
    }
  }


  /**
   * @method decryptTextData
   * @param AsciiData Ascii art invoice data.
   * @description Break the Ascii art invoice data in chunks of 85 leters and process the individually.
   * @return {void}
   */
  decryptTextData(AsciiData) {
    for (let i = 0; i < AsciiData.length / 85; i++) {
      this.textArray.push(this.characterService.decryptElement(AsciiData.substring(85 * i, (85 * i) + 84)));
    }
  }


  /**
   * @method saveFile
   * @description Save the converted Ascii art invoice data in output_user_story_1.txt file.
   * @return {void}
   */
  saveFile() {
    let saveData = this.textArray.join('\r\n');
    var file = new File([saveData], "output_user_story_1.txt", { type: "text/plain;charset=utf-8" });
    saveAs(file);
  }

}
