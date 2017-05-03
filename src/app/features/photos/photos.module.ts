import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoGridComponent} from './photo-grid/photo-grid.component';
import {AlbumListComponent} from './album-list/album-list.component';
import {RouterModule} from '@angular/router';
import {PhotoDetailComponent} from './photo-detail/photo-detail.component';
import {PhotosRoutes} from './photos.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PhotosRoutes)
  ],
  declarations: [
    PhotoGridComponent,
    AlbumListComponent,
    PhotoDetailComponent
  ]
})
export class PhotosModule {
}
