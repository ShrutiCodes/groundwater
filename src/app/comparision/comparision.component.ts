import { Component, OnInit, Input } from '@angular/core';
import { single, multi } from '../data';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.scss']
})
export class ComparisionComponent implements OnInit {
  NOCid: number;
  tiles: Tile[] = [
    {cols: 1, rows: 1, color: 'lightgreen'},
    {cols: 1, rows: 1, color: 'lightgreen'},    
    {cols: 2, rows: 3, color: 'lavender'},
    {cols: 2, rows: 5, color: 'lightcoral'},
    {cols: 1, rows: 3, color: 'purple'},
    {cols: 1, rows: 3, color: 'orange'},
  ];

  single: any[];
  multi: any[];

  view: any[] = [600, 400];
  view34: any[] = [300, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA154', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { 
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

}
