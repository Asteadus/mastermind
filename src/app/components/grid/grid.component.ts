import { createFactoryType } from '@angular/compiler/src/render3/r3_factory';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RawColor } from 'src/app/models/raw-color';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input("listTentative")
  listTentative : RawColor[]=[] = []

  @Input("submitted")
  submitted : boolean= false;

  
  
  constructor( ) { }

  ngOnInit(): void {
  }

  
  
}
