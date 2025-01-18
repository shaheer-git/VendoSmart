import { Routes } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { SummaryComponent } from './components/summary/summary.component';
import { UploadComponent } from './components/upload/upload.component';

export const routes: Routes = [
    { path: '', component: UploadComponent },
    { path: 'preview', component: PreviewComponent },
    { path: 'summary', component: SummaryComponent }
];