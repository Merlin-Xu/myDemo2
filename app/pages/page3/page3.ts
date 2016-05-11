import {Page, NavController} from 'ionic-angular';
import {MatchDetailsPage} from '../match-details/match-details';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
	items;nav;
  constructor(nav: NavController) {
	  this.items = [{ host: "twitter", another: "apple", time: "2016年5月1月", place: "五二广场小学", summary: "but when...", match: "3:2" }, { host: "tux", another: "tumblr", time: "2016年8月1月", place: "五四广场小学", summary: "Icelandic sextet", match: "1:2" }];
	  this.nav = nav;
  }
  itemClicked(event,itemData){
	 console.log("item clicked"); 
	 console.log(event);
	 console.log(itemData);
	 this.nav.push(MatchDetailsPage, {
		 host: itemData.time
	 });
	}
  //hide nav bar when we enter the page
  onPageWillEnter() {
	  document.getElementsByTagName("ion-navbar-section")[0].style.display = "none";
  }

  //show nav bar when we leave the page
  onPageDidLeave() {
	  document.getElementsByTagName("ion-navbar-section")[0].style.display = "block";
  }
}
