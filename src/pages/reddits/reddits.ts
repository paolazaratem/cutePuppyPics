import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
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

  viewItem(item){
    //Let's navigate from RedditsPage to DetailsPage
    this.navCtrl.push( DetailsPage, {
      item:item
    });
  }
}