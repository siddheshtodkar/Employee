import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { masterEffects } from './store/master/master.effects';
import { masterDashboardReducer, masterDesignationReducer, masterRoleReducer } from './store/master/master.reducers';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { clientsReducer } from './store/client/client.reducers';
import { ClientEffects } from './store/client/client.effects';
import { appAlertReducer } from './store/app/app.reducers';
import { employeeEffects } from './store/employee/employee.effects';
import { getEmployeeReducer } from './store/employee/employee.reducers';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', canActivate: [authGuard], children: [
            {
                path: 'master', component: MasterComponent, providers: [
                    importProvidersFrom(
                        StoreModule.forFeature('roles', masterRoleReducer),
                        StoreModule.forFeature('designations', masterDesignationReducer),
                        StoreModule.forFeature('dashboard', masterDashboardReducer),
                        EffectsModule.forFeature([masterEffects])
                    )
                ]
            },
            { path: 'employee', component: EmployeeComponent },
            {
                path: 'client', component: ClientComponent, providers: [
                    importProvidersFrom(
                        StoreModule.forFeature('clients', clientsReducer),
                        EffectsModule.forFeature([ClientEffects])
                    )
                ]
            },
            {
                path: 'client-project', component: ClientProjectComponent, providers: [
                    importProvidersFrom(
                        StoreModule.forFeature('employees', getEmployeeReducer),
                        StoreModule.forFeature('clients', clientsReducer),
                        EffectsModule.forFeature([employeeEffects, ClientEffects])
                    )
                ]
            }
        ],
        providers: [
            importProvidersFrom(
                StoreModule.forFeature('alert', appAlertReducer),
            )
        ],
        loadComponent: () => import('./components/layout/layout.component').then(c => c.LayoutComponent)
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
