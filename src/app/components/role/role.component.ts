import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IResponse, IRole } from '../../models/interfaces/role';
import { Store } from '@ngrx/store';
import * as masterActions from '../../store/master/master.actions'
import { isFailureSelector, isLoadingSelector, isSuccessSelector } from '../../store/master/master.selectors';
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
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.roleList$ = this.store.select(isSuccessSelector)
    this.error$ = this.store.select(isFailureSelector)
  }
  ngOnInit(): void {
    this.store.dispatch(masterActions.getAllRoles())
  }
}
