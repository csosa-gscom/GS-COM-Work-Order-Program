import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-front-desk-page',
  templateUrl: './front-desk-page.component.html',
  styleUrls: ['./front-desk-page.component.css']
})
export class FrontDeskPageComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver) { 

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 720px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


}
