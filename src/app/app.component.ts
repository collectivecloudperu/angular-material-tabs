import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miapp'; 

  tabIndex = 0 ;

  changeTab(event: { index: number; }){
    console.log(event.index)
    this.tabIndex = event.index;
  }
}
