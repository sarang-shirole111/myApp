import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, image:"../../../assets/destination1.jpg" },
          { title: 'Card 2', cols: 1, rows: 1, image:"../../../assets/destination2.jpg"},
          { title: 'Card 3', cols: 1, rows: 1, image:"../../../assets/destination3.jpg" },
          { title: 'Card 4', cols: 1, rows: 1, image:"../../../assets/destination4.jpg" },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, image:"../../../assets/destination1.jpg" },
        { title: 'Card 2', cols: 1, rows: 1, image:"../../../assets/destination2.jpg" },
        { title: 'Card 3', cols: 1, rows: 2, image:"../../../assets/destination3.jpg" },
        { title: 'Card 4', cols: 1, rows: 1, image:"../../../assets/destination4.jpg"},
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
