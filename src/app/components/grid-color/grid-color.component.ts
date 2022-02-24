import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RawColor } from 'src/app/models/raw-color';

@Component({
  selector: 'app-grid-color',
  templateUrl: './grid-color.component.html',
  styleUrls: ['./grid-color.component.css']
})
export class GridColorComponent implements OnInit {
  @Input("listOfcolor")
  listOfColor : Array<string> = []

  @Output("color-tentative")
  emitter = new EventEmitter();


  @Output("gridTentative")
  gridTentative = new EventEmitter();

  listOfColorChoice: Array<string> = []
  i : number = 1;

  form = new FormGroup({
    "color1" : new FormControl(),
    "color2" : new FormControl (),
    "color3" : new FormControl (),
    "color4" : new FormControl (),
  });

  listTentative : RawColor[]=[]
  

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
   
  }
  onSubmit(){
    this.emitter.emit(this.listOfColorChoice)
    this.colorReset()
    
  }
  colorAdd(color: string){
    if(this.listOfColorChoice.length<4){
      this.listOfColorChoice.push(color)
      this.form.get("color"+this.i)?.setValue(color)
      this.i++
      
    }
  }
  colorReset(){
    this.listOfColorChoice= []
    this.i=1
  }
  
  

  
}
