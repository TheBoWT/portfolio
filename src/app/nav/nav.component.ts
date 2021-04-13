import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  opened = true;
  closed = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.innerWidth > 520? this.opened = false : this.opened = true;
    
  }
  onNavigate(page){
    this.navToggler();
    
    this.router.navigate([`${page}`])
  }

  navToggler(){
    if(window.innerWidth > 520) return;
    this.opened = !this.opened;
    this.closed = !this.closed;
  }

  downloadResume(){
    
  }

  onResize(event){
    if(event.target.innerWidth > 520)
      this.opened = false;  
    else
      this.opened = true;
      this.closed = false;      
  }
}
