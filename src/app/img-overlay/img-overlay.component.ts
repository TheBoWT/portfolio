import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-overlay',
  templateUrl: './img-overlay.component.html',
  styleUrls: ['./img-overlay.component.scss']
})
export class ImgOverlayComponent implements OnInit {
currentImg:number;
imgUrls:string;

  constructor(private dialogRef:MatDialogRef<ImgOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) private data ) { }

  ngOnInit(): void {
    this.imgUrls = this.data.imgUrls;
    this.currentImg = this.data.imgIndex;    
  }

  onClose(arg){
    if(arg == null){
      this.dialogRef.close();
      return;
    }

    const windowSize = arg.target.innerWidth;
    if(windowSize < 520 )
      this.dialogRef.close();
  }
  
  prevImg(){ 
    if(this.currentImg == 0) return;

    this.currentImg--;
  }
  nextImg(){
    if(this.imgUrls.length == this.currentImg + 1) return;
      
    this.currentImg++;
  }

}
