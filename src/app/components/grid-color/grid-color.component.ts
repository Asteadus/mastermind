import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  @Output("submitted")
  submitted = new EventEmitter();

  listOfColorChoice: Array<string> = []
  i : number = 1;

  form = new FormGroup({
    "color1" : new FormControl(),
    "color2" : new FormControl (),
    "color3" : new FormControl (),
    "color4" : new FormControl (),
  });

  constructor() { }

  ngOnInit(): void {
   
  }
  onSubmit(){
    console.log(this.form.value)
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
  
  setTentative(){
    this.emitter.emit(this.listOfColorChoice)
    this.submitted.emit(true)
  }
}
