import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
	templateUrl: 'build/pages/match-details/match-details.html'
})
export class MatchDetailsPage {
	host;
	constructor(navParams: NavParams) { 
		this.host = navParams.get("host");
	}
}
