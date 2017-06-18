import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <ul>
      <li><a routerLink="/">Home</a></li>
       <li><a routerLink="/about">About</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
`,
 // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

}
