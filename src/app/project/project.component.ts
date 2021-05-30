import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ImgOverlayComponent } from '../img-overlay/img-overlay.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
project:any;
currentImg = 0;
  constructor(
    private projectService: ProjectService, 
    private route: ActivatedRoute, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.project = this.projectService.getProject(id);
  }

  onEnlarge(urls, i){
    if(window.innerWidth < 520) return;
    this.dialog.open(
      ImgOverlayComponent,{
        height: '100vh',
        width: '100vw',
        data: { imgUrls: urls, imgIndex: i}
      });
  }

  
}
