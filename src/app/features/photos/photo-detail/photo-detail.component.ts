import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PhotoService} from '../../../data/services/photo.service';
import {Photo} from '../../../data/entities/photo.entity';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo: Photo;

  constructor(private route: ActivatedRoute, private photoSvc: PhotoService) {
  }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.photoSvc.getPhoto(+params['photoId']))
        .subscribe((photo: Photo) => this.photo = photo);
  }
}
