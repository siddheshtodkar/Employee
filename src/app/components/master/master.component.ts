import { Component, inject } from '@angular/core';
import { RoleComponent } from '../role/role.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { DesignationComponent } from '../designation/designation.component';
import { MasterService } from '../../services/master.service';
import { IDashboard, IResponse } from '../../models/interfaces/role';
import { Store } from '@ngrx/store';
import * as masterActions from '../../store/master/master.actions'
import { of } from 'rxjs';
import { getDashboardDataSelector } from '../../store/master/master.selectors';
@Component({
  selector: 'app-master',
  imports: [RoleComponent, NgClass, DesignationComponent, AsyncPipe],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  masterService = inject(MasterService)
  store = inject(Store)
  componentSelected: string = 'Roles'
  dashboardData$ = of({
    "totalClient": 0,
    "totalEmployee": 0,
    "totalDesignation": 0
  })
  constructor() {
    this.dashboardData$ = this.store.select(getDashboardDataSelector)
  }
  ngOnInit() {
    this.store.dispatch(masterActions.getDashboardData())
  }
}