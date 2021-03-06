import {Page, NavController} from 'ionic-angular';
import {MemberPage} from '../members/member';

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
	searchQuery: string = '';
	items;
	nav;
	constructor(nav: NavController) {
	  this.initializeItems();
	  this.nav = nav;
  }
  initializeItems() {
	  this.items = [{ name: "Totoro", thumbnail: "totoro.png", position: "cc" },
		  { name: "Rotla", thumbnail: "rotla.png", position: "cw" },
		  { name: "Ghostbusters", thumbnail: "ghostbusters.png", position: "co" },
		  { name: "Batman", thumbnail: "batman.png", position: "sh" },
		  { name: "Torres", thumbnail: "bttf.png", position: "cw" },
		  { name: "Anaking", thumbnail: "esb.png", position: "co" },
		  { name: "Gang", thumbnail: "terminator.png", position: "bo" }];
  }
  getItems(searchbar) {
  	 // Reset items back to all of the items
	  this.initializeItems();
	  // set q to the value of the searchbar
	  var q = searchbar.value;

	  // if the value is an empty string don't filter the items
	  if (q.trim() == '') {
		  return;
	  }

	  this.items = this.items.filter((v) => {
		  if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
			  return true;
		  }
		  return false;
	  })
  }
  itemClicked(event, itemData) {
	  console.log("item clicked");
	  console.log(event);
	  console.log(itemData);
	  this.nav.push(MemberPage, {
		  host: itemData.name
	  });
  }
}
