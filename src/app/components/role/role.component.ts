import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Store } from '@ngrx/store';
import * as masterActions from '../../store/master/master.actions'
import { isFailureRolesSelector, isLoadingRolesSelector, isSuccessRolesSelector } from '../../store/master/master.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-role',
  imports: [AsyncPipe],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  service = inject(MasterService)
  store = inject(Store)
  roleList$
  isLoading$
  error$
  constructor() {
    this.isLoading$ = this.store.select(isLoadingRolesSelector)
    this.roleList$ = this.store.select(isSuccessRolesSelector)
    this.error$ = this.store.select(isFailureRolesSelector)
  }
  deleteRole(id:number) {
    this.store.dispatch(masterActions.deleteRoleById({id:id}))
  }
  ngOnInit(): void {
    this.store.dispatch(masterActions.getAllRoles())
  }
}
