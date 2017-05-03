import {Routes} from '@angular/router';
import {AlbumListComponent} from './album-list/album-list.component';
import {PhotoGridComponent} from './photo-grid/photo-grid.component';
import {PhotoDetailComponent} from './photo-detail/photo-detail.component';

export const PhotosRoutes: Routes = [
  {path: 'user/:userId/albums', component: AlbumListComponent},
  {path: 'user/:userId/album/:albumId/photos', component: PhotoGridComponent},
  {path: 'user/:userId/album/:albumId/photo/:photoId', component: PhotoDetailComponent}
];
