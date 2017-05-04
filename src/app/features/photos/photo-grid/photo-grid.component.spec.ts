import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {API_SERVICE_CONFIG} from '../../../data/services/api.service';
import {By} from '@angular/platform-browser';
import {DataModule} from '../../../data/data.module';
import {Observable} from 'rxjs/Observable';
import {Photo} from '../../../data/entities/photo.entity';
import {PhotoGridComponent} from './photo-grid.component';
import {PhotoService} from '../../../data/services/photo.service';
import {RouterTestingModule} from '@angular/router/testing';

import 'rxjs/add/observable/of';


const photos: Photo[] = require('../../../../fixtures/photos.json');

class MockPhotoService {
  getPhotosOfAlbum(albumId: number) {
    return Observable.of(photos);
  }
}

describe('PhotoGridComponent', () => {
  let component: PhotoGridComponent;
  let fixture: ComponentFixture<PhotoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule,
        RouterTestingModule
      ],
      declarations: [
        PhotoGridComponent
      ],
      providers: [
        {provide: API_SERVICE_CONFIG, useValue: {baseUrl: ''}},
        {provide: PhotoService, useValue: new MockPhotoService()}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the expected title', async(() => {
    const element = fixture.debugElement;
    const heading = element.query(By.css('h2'));
    const expectedTitle = 'Photos';

    expect(heading.nativeElement.textContent).toEqual(expectedTitle);
  }));

  it('should render photos to the grid', async(() => {
    const element = fixture.debugElement;
    const tiles = element.queryAll(By.css('a'));

    expect(tiles.length).toEqual(photos.length);

    tiles.map((tile, index) => {
      const photo = photos[index];
      const [image] = tile.children;

      expect(image.nativeElement.src).toEqual(photo.thumbnailUrl);
    });
  }));
});
