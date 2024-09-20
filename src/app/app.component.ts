import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';

  constructor(private readonly router:Router){}

  navigateTo(route:string){
    console.log("route:",route);
    this.router.navigateByUrl(route)
  }
}
