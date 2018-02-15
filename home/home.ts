import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public size: number;
  public fontSize: any;


  constructor(private tts: TextToSpeech, public navCtrl: NavController) {

    this.size;
    this.fontSize = 15;
  }

  // increasing font size
  increaseFontSize() {
    if (this.size < 18) {
      this.size++;
      this.fontSize = "font-size-" + this.size;
    }
  }

  // increasing font size
  decreaseFontSize() {
    if (this.size > 15) {
      this.size--;
      this.fontSize = "font-size-" + this.size;
    }
  }

}

    // TTS Speaker
    /*
    document.addEventListener('deviceready', function (){
      tts.speak({
        text: 'Welcome!' + 'This is the homepage of Navi-Me!' + 'Your indoor navigation app to locate your current position,' +
        'navigating anywhere and' + 'setting your accessibility preferences',
        locale: 'en-US',
        rate: 0.75
      }).then(function () {
        alert('success');
      }, function (reason) {
        alert(reason);
      }), false}); */
