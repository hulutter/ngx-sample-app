import {Routes} from '@angular/router';

const defaultRoute = 'users';

export const AppRoutes: Routes = [
  {path: '**', redirectTo: defaultRoute}
];
