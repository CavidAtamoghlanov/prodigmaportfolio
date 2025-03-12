import { Routes } from '@angular/router';
import { LoadingPageComponent } from './features/coming-soon/loading-page/loading-page.component';
import { EyeBallPageComponent } from './features/coming-soon/eye-ball-page/eye-ball-page.component';

export const routes: Routes = [
    { path: '',  component: LoadingPageComponent },
    { path: 'eye-ball',  component: EyeBallPageComponent }
];
