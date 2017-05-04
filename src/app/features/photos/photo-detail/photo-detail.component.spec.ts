import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {API_SERVICE_CONFIG} from '../../../data/services/api.service';
import {By} from '@angular/platform-browser';
import {DataModule} from '../../../data/data.module';
import {Observable} from 'rxjs/Observable';
import {Photo} from '../../../data/entities/photo.entity';
import {PhotoDetailComponent} from './photo-detail.component';
import {PhotoService} from '../../../data/services/photo.service';
import {RouterTestingModule} from '@angular/router/testing';

import 'rxjs/add/observable/of';


const photos: Photo[] = require('../../../../fixtures/photos.json');
const photo = photos[0];

class MockPhotoService {
  getPhoto(photoId: number) {
    return Observable.of(photo);
  }
}

describe('PhotoDetailComponent', () => {
  let component: PhotoDetailComponent;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule,
        RouterTestingModule
      ],
      declarations: [
        PhotoDetailComponent
      ],
      providers: [
        {provide: API_SERVICE_CONFIG, useValue: {baseUrl: ''}},
        {provide: PhotoService, useValue: new MockPhotoService()}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the expected title', async(() => {
    const element = fixture.debugElement;
    const heading = element.query(By.css('h2'));
    const expectedTitle = 'Photo';

    expect(heading.nativeElement.textContent).toEqual(expectedTitle);
  }));

  it('should render a photo', async(() => {
    const element = fixture.debugElement;
    const image = element.query(By.css('img'));

    expect(image.nativeElement.src).toEqual(photo.url);
  }));
});
