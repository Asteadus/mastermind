import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  listOfColor = ["blue","red","purple","green","yellow","black"]
  colorTentative : Array<string> = []
  submitted: boolean = false;


  

  constructor() { }

  ngOnInit(): void {
  }

}
