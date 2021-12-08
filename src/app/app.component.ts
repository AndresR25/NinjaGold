import { Component } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;
  user_id:any;
  gold:any;
  adventureLog = [];
  constructor(private _httpService: GoldService){}
  ngOnInit(){
    this.createUserService();
  }

  createUserService() {
    let observable = this._httpService.createUser();
    observable.subscribe( (data) => {
      this.user = data;
      this.user_id = this.user.data._id;
      this.gold = this.user.data.gold;
    })
  }

  updateUserInfo(user_id:any, gold:any, log:any) {
    let observable = this._httpService.updateUserInfo(user_id, gold, log);
    observable.subscribe();
  }

  random(min:any, max:any){
  	return (Math.floor(Math.random() * (min-max))+ max)
  }

  setGold(gold:any) {
    this.gold += gold;
  }

  farm() {
    let goldFound = this.random(2,6);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the farm.`;
    this.updateUserInfo(this.user_id, goldFound, msg);
  }

  cave() {
    let goldFound = this.random(5,11);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the cave.`;
    this.updateUserInfo(this.user_id, goldFound, msg);
  }

  house() {
    let goldFound = this.random(7,16);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the house.`;
    this.updateUserInfo(this.user_id, goldFound, msg);
  }

  casino() {
    let goldFound = this.random(-100,101);
    this.setGold(goldFound);
    let msg = '';
    if (goldFound >= 0 ) {
      msg = `You found ${goldFound} at the casino.`;
    }
    else {
      msg = `You lost ${goldFound * -1} at the casino.`;
    }
    this.updateUserInfo(this.user_id, goldFound, msg);
  }
}
