import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { masterEffects } from './store/master/master.effects';
import { masterRoleReducer } from './store/master/master.reducers';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', canActivate: [authGuard], children: [
            {
                path: 'master', component: MasterComponent, providers: [
                    importProvidersFrom(
                        StoreModule.forFeature('roles', masterRoleReducer),
                        EffectsModule.forFeature([masterEffects])
                    )
                ]
            },
            { path: 'employee', component: EmployeeComponent },
            { path: 'client', component: ClientComponent },
            { path: 'client-project', component: ClientProjectComponent }
        ],
        loadComponent: () => import('./components/layout/layout.component').then(c => c.LayoutComponent)
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
