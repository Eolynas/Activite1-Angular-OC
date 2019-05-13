import {Component, Input} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Activité 1 | Angular OC';


  constructor() {
    const config = {
      apiKey: "AIzaSyDw7u5tTuRKguXVlqlXGy0nAhaHWNSFUVI",
      authDomain: "apppostsangular.firebaseapp.com",
      databaseURL: "https://apppostsangular.firebaseio.com",
      projectId: "apppostsangular",
      storageBucket: "apppostsangular.appspot.com",
      messagingSenderId: "775184899141",
      appId: "1:775184899141:web:52264d9dfeb57eb3"
    };
    firebase.initializeApp(config);
  }



  /*posts = [
        {
            title: 'L\'Olympique de Marseille',
            content: 'L\'Olympique de Marseille est un club de football français fondé en août 1899 à Marseille par René Dufaure de ' +
                'Montmirail. Le club marseillais joue au stade de l\'Huveaune de 1904 à 1937, date à laquelle est inauguré ' +
                'le stade Vélodrome. ',
            loveIts: 100,
            created_at: '1899-08-31'
        },
        {
            title: 'L\'Olympique de Lyon',
            content: 'L\'Olympique lyonnais est un club de football français fondé en 1950 à Lyon. Le club, basé au Parc Olympique ' +
                'lyonnais à Décines-Charpieu, est présidé depuis juin 1987 par Jean-Michel Aulas et l\'équipe masculine est entraînée ' +
                'par Bruno Génésio depuis le 24 décembre 2015. Il évolue depuis 1989 en Ligue 1. ',
            loveIts: -1,
            created_at: '01/01/1950'
        },
        {
            title: 'PSG ( ou QSG )',
            content: 'Le Paris Saint-Germain Football Club, abrégé en Paris Saint-Germain FC, couramment appelé Paris Saint-Germain ' +
                'ou PSG, est un club de football français faisant partie du club omnisports du même nom, basé à Saint-Germain-en-Laye ' +
                'et à Paris. ',
            loveIts: -10,
            created_at: '1904'
        },
        {
            title: 'LOSC',
            content: 'Le LOSC Lille Association, abrégé en LOSC Lille et couramment appelé LOSC, est un club de football français ' +
                'fondé à Lille en septembre 1944 sous le nom de Stade lillois, avant que ce dernier ne prenne aussitôt celui de ' +
                'Lille Olympique Sporting Club ',
            loveIts: 1,
            created_at: '1944'
        }
  ];*/
}
