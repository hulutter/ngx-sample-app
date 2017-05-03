import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {PhotoService} from '../../../data/services/photo.service';
import {Album} from '../../../data/entities/album.entity';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[];

  constructor(private route: ActivatedRoute, private photoSvc: PhotoService) {
  }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.photoSvc.getAlbumsOfUser(+params['userId']))
        .subscribe((albums: Album[]) => this.albums = albums);
  }
}
