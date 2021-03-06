import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-jazz',
  templateUrl: './jazz.component.html',
  styleUrls: ['./jazz.component.css']
})
export class JazzComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'uta';
  uj:string ='cnEOe06zp6w';
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
