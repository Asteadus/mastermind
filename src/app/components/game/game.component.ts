import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RawColor } from 'src/app/models/raw-color';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  listOfColor = ["blue","brown","purple","green","yellow","black"]

  reponse : Array<string> = []

  listTentative : RawColor[]=[]

  nbTentativeDef : number = 0;

  life : boolean = true;
  
  j: number =0;
  
  win : boolean = false;
  start : boolean = false;
  constructor() { }
  config = new FormGroup({
    "nbTentative" : new FormControl(),
 
  });

  ngOnInit(): void {
  }
  onSubmit(){
     
    this.nbTentativeDef = this.config.value.nbTentative
    this.start = true;
  }
 
  verification( colorTentative : Array<string>){
    
    for (let i = 0; i<4; i++){

      if (this.reponse[i] === colorTentative[i]){
        this.j=this.j+1
        colorTentative.push("lightgreen")
        
      }else{
        let accuNoColor =0
        for (let k = 0; k<4; k++){
          
          if (this.reponse[k] === colorTentative[i] && colorTentative[k+4] == undefined){

            console.log(console.log(colorTentative[5]))
            colorTentative.push("orange")
            
            break;
          }
          else{
            accuNoColor++
            if(accuNoColor == 4){
              colorTentative.push("red")
            }

          } 
          
        }
      }
      
      if(this.j == 4){
        this.win = true;
      }
    }
    
    this.j=0
    this.pushTentativeInObject(colorTentative)

  }
   pushTentativeInObject( colorTentative : Array<string>){
    let tentative = {
      color1 : colorTentative[0],
      color2 : colorTentative[1],
      color3 : colorTentative[2],
      color4 : colorTentative[3],
      bgColor1 : colorTentative[4],
      bgColor2 : colorTentative[5],
      bgColor3 : colorTentative[6],
      bgColor4 : colorTentative[7],
    }
    this.listTentative.push(tentative)
    this.nbVie()

    
  } 
  
  nbVie(){
    if (this.listTentative.length == this.nbTentativeDef){
      this.life = false;
    }
  }
}
