import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  imageUrl = '';
  showImage = false;

  constructor(private photoService: PhotoService) {
    this.photoService.getPhoto().subscribe((response) => {
      this.imageUrl = response;
    });
  }

  onClick(): void {
    this.fetchPhoto();
  }

  fetchPhoto(): void {
    this.photoService.getPhoto().subscribe((response) => {
      this.imageUrl = response;
    });
  }

  ngOnInit(): void {}
}
