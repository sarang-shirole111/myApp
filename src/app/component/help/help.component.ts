import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {

  answers = document.querySelectorAll(".accordion");
  
  listen(){
    this.answers.forEach((event:any) => {
      event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
          event.classList.remove("active");
        } else {
          event.classList.add("active");
        }
      });
    });
  }

}
