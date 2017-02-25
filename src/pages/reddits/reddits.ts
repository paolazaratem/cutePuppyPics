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
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefault();
  }

  ngOnInit(){
    console.log('ngOnInit');
    this.getPost(this.category, this.limit);
  }

  getDefault(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    }else{
      this.category = 'sports';
    }
    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    }else{
      this.limit = 10;
    }
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

  changeCategory() {
    console.log('changeCategory');
    this.getPost(this.category, this.limit);
  }
}