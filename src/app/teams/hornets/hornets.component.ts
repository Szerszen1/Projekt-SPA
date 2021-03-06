import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hornets',
  templateUrl: './hornets.component.html',
  styleUrls: ['./hornets.component.css']
})
export class HornetsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'cha';
  ch:string ='whyjZcHwf-4';
  player: YT.Player;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player);
	}
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
