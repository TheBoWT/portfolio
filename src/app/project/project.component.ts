import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
project;
currentImg = 0;
enlarged = true;
gallery = false;
  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.enlarged = false;
    this.gallery = true;
    
    const id = +this.route.snapshot.params['id'];
    this.project = this.projectService.getProject(id);
    
  }

  openModel(){
    this.enlarged = !this.enlarged;
    this.gallery = !this.gallery;
  }

  preImg(){
     console.log(this.currentImg, ' ', this.project.images.length - 1);
    
    if(this.currentImg <= this.project.images.length - 1)
      this.currentImg--;
    if(this.currentImg == 0)
      return;
  }
  nextImg(){ 
    if(this.currentImg >= this.project.images.length - 1)
      return
    else
      this.currentImg++;
  }


  
}
