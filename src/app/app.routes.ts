import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {ChatComponent} from './chat.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"

  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'sidebar',
  }
];
