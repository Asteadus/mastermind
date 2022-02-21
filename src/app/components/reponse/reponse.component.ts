import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  
  reponse:Array<string> = []
  i : number = 0;
  j :number =0;
  win : boolean = false;
  

  @Input("listOfcolor")
  listOfColor : Array<string> = []
  

  @Input("tentative")
  tentative : Array<string> = []

  @Input("submitted")
  submitted : boolean= true;


  constructor(private cdref: ChangeDetectorRef) { 
    this.win = false;
  }

  ngOnInit(): void {
   
   this.generateReponse()
  }
  generateReponse(){
      for (this.i = 0;this.i<4;this.i++){
        let random = Math.floor(Math.random() * this.listOfColor.length);
        let color = this.listOfColor[random]
        this.reponse.push(color)
      }
      console.log(this.reponse)

  }

  verifReponse(){
  
    for (let i = 0; i<4; i++){
      console.log(this.reponse[i])
      console.log(this.tentative[i])
      console.log(i)
      if (this.reponse[i] === this.tentative[i]){
        this.j=this.j+1
        console.log("t")
      }
    }
    console.log(this.j)
    if(this.j=4){
      this.win = true;
      this.cdref.detectChanges()

    }
    

  }

}
