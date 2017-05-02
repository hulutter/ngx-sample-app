import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {AddressLinePipe} from './features/users/user-list/address-line/address-line.pipe';
import {DataModule} from './data/data.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataModule,
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent,
        AddressLinePipe
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it('should provide a breadcrumb containing a `Home` link', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const breadcrumb = compiled.querySelector('a.breadcrumb');

    expect(breadcrumb.textContent).toEqual('Home');
    expect(breadcrumb.getAttribute('routerLink')).toEqual('/');
  }));

  it('should provide a `router-outlet` element', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('router-outlet')).toBeDefined();
  }));
});
