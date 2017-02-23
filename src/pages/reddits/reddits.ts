import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    console.log('qrqrqrrqrqrqr');
    //this.getPost('sports', 5);
  }

  ngOnInit(){
    console.log('ngOnInit yuuyuyuy');
    this.getPost('sports', 10);
  }

  getPost( category, limit ){
    this.redditService.getPost(category, limit).subscribe(response => {
      console.log('paola');
      console.log(response);
      this.items = response.data.children;
    });
  }
}