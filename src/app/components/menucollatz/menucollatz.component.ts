import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {

  public aleatorios!: Array<number>;

  constructor() { }

  ngOnInit(): void {
    for(var i=0;i<5;i++){
      
    }
  }

}
