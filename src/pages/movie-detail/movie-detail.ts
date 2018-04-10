import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movie;
  isFavorite: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.isFavorite = false;
      // TODO persist data
    } else {
      this.isFavorite = true;
      // TODO persist data
    }
  }

  ionViewDidLoad() {
    this.movie = this.navParams.data;
  }

}
