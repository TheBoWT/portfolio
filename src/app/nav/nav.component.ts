import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('change', [
      state('closed', style({
        border: 'thick blue solid',
        opacity: 0,
        transform: 'translateX(-40rem)',
        display: 'none'
        
      })),
      state('opened', style({
        opacity:1,
        transform: 'translateX(0)'
      })),
      transition('opened<=>closed', [
        animate(500)
      ])
    ])
  ]

})



export class NavComponent implements OnInit {
  navCollapse = true;
  state = 'closed';

  constructor(private router: Router) {}

 ngOnInit(): void {
    if(window.innerWidth > 520)
      this.state = 'opened'; 
  } 

  onNavigate(page){
    this.router.navigate([`${page}`])
  }

  navToggler(){
    this.state == 'opened'? this.state = 'closed': this.state = 'opened';
    this.navCollapse = !this.navCollapse;
  }

  onResize(event){
    if(event.target.innerWidth < 520){
      this.navCollapse = true;
      this.state = 'closed'; 
    }else{
      this.state = 'opened';
    }
    
      
  }
}
