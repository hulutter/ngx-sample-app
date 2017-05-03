import {Component, OnInit} from '@angular/core';
import {Photo} from '../../../data/entities/photo.entity';
import {ActivatedRoute, Params} from '@angular/router';
import {PhotoService} from '../../../data/services/photo.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  photos: Photo[];
  routeParams: Params;

  constructor(private route: ActivatedRoute, private photoSvc: PhotoService) {
  }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => {
          this.routeParams = params;
          return this.photoSvc.getPhotosOfAlbum(+params['albumId']);
        })
        .subscribe((photos: Photo[]) => this.photos = photos);
  }
}
