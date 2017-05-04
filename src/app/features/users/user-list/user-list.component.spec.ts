import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {API_SERVICE_CONFIG} from '../../../data/services/api.service';
import {AddressLinePipe} from './address-line/address-line.pipe';
import {UserListComponent} from './user-list.component';
import {DataModule} from '../../../data/data.module';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../../../data/entities/user.entity';
import {UserService} from '../../../data/services/user.service';
import {Observable} from 'rxjs/Observable';
import {By} from '@angular/platform-browser';

import 'rxjs/add/observable/of';


const users: User[] = require('../../../../fixtures/users.json');

class MockUserService {
  getUsers() {
    return Observable.of(users);
  }
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule,
        RouterTestingModule
      ],
      declarations: [
        AddressLinePipe,
        UserListComponent
      ],
      providers: [
        {provide: API_SERVICE_CONFIG, useValue: {baseUrl: ''}},
        {provide: UserService, useValue: new MockUserService()}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render users to the table', async(() => {
    const element = fixture.debugElement;
    const rows = element.queryAll(By.css('tbody tr'));

    rows.map((row, index) => {
      const user = users[index];
      const [nameColumn, addressColumn, buttonColumn] = row.children;

      // Name Column
      expect(nameColumn.nativeElement.textContent).toEqual(user.name);

      // Address Column
      const addressPipe = new AddressLinePipe();
      expect(addressColumn.nativeElement.textContent).toEqual(addressPipe.transform(user.address));

      // Button Column
      const button = buttonColumn.query(By.css('button'));
      console.log(button);
      expect(button.nativeElement.textContent).toContain('Albums');
    });
  }));
});
