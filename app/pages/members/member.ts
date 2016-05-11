import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
	templateUrl: 'build/pages/members/member.html'
})
export class MemberPage {
	host;
	constructor(navParams: NavParams) { 
		this.host = navParams.get("host");
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
