import { Routes } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';

export const routes: Routes = [
    {
        path: 'monitor/:id',
        component: MonitorComponent
    }
];
