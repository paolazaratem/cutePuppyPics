import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor(public navCtrl: NavController, private RedditService: RedditService) {
    console.log('qrqrqrrqrqrqr');
    this.getPost('sports', 5);
  }

  ngOninit(){
    console.log('sdsdsdsd');
    this.getPost('sports', 5);
  }

  getPost( category, limit){
    this.RedditService.getPost(category, limit).suscribe;
  }
}