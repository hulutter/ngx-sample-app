import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Album} from '../../../data/entities/album.entity';
import {AlbumListComponent} from './album-list.component';
import {API_SERVICE_CONFIG} from '../../../data/services/api.service';
import {By} from '@angular/platform-browser';
import {DataModule} from '../../../data/data.module';
import {Observable} from 'rxjs/Observable';
import {PhotoService} from '../../../data/services/photo.service';
import {RouterTestingModule} from '@angular/router/testing';

import 'rxjs/add/observable/of';


const albums: Album[] = require('../../../../fixtures/albums.json');

class MockPhotoService {
  getAlbumsOfUser(userId: number) {
    return Observable.of(albums);
  }
}

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule,
        RouterTestingModule
      ],
      declarations: [
        AlbumListComponent
      ],
      providers: [
        {provide: API_SERVICE_CONFIG, useValue: {baseUrl: ''}},
        {provide: PhotoService, useValue: new MockPhotoService()}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the expected title', async(() => {
    const element = fixture.debugElement;
    const heading = element.query(By.css('h2'));
    const expectedTitle = 'Albums';

    expect(heading.nativeElement.textContent).toEqual(expectedTitle);
  }));

  it('should render albums to the table', async(() => {
    const element = fixture.debugElement;
    const rows = element.queryAll(By.css('tbody tr'));

    expect(rows.length).toEqual(albums.length);

    rows.map((row, index) => {
      const album = albums[index];
      const [titleColumn, buttonColumn] = row.children;

      // Title Column
      expect(titleColumn.nativeElement.textContent).toEqual(album.title.toUpperCase());

      // Button Column
      const button = buttonColumn.query(By.css('button'));
      expect(button.nativeElement.textContent).toContain('Photos');
    });
  }));
});
