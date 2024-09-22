import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';
  fav = false;

  constructor(private readonly router:Router){}

  navigateTo(route:string){
    console.log("route:",route);
    this.router.navigateByUrl(route)
  }

  favorite(){
    this.fav = !this.fav;
  }
}
