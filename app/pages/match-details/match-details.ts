import {Page, NavController, NavParams} from 'ionic-angular';
import {Page3} from '../page3/page3';

@Page({
	templateUrl: 'build/pages/match-details/match-details.html'
})
export class MatchDetailsPage {
	host;
	constructor(navParams: NavParams) { 
		this.host = navParams.get("host");
	}
	goToOtherPage(){
		this.nav.push(Page3);
	}
	//hide nav bar when we enter the page
	onPageWillEnter() {
		document.getElementsByTagName("ion-navbar-section")[0].style.display = "block";
	}

	//show nav bar when we leave the page
	onPageDidLeave() {
		document.getElementsByTagName("ion-navbar-section")[0].style.display = "none";
	}
}
