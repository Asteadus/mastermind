import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  
  reponse:Array<string> = []
  i : number = 0;
  j :number =0;
    

  @Output("reponse")
  emitter = new EventEmitter();
  
  @Input("listOfcolor")
  listOfColor : Array<string> = []
  
  @Input("submitted")
  submitted : boolean= true;

  @Input("win")
  win : boolean = false;
  @Input("life")
  life : boolean = true;

  constructor() { 
    
  }

  ngOnInit(): void {
   
   this.generateReponse()
   this.emitter.emit(this.reponse)
  }
  generateReponse(){
      for (this.i = 0;this.i<4;this.i++){
        let random = Math.floor(Math.random() * this.listOfColor.length);
        let color = this.listOfColor[random]
        this.reponse.push(color)
      }
   

  }

  

}