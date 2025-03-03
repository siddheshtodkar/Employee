import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IResponse } from '../../models/interfaces/master';
import { ClientService } from '../../services/client.service';
import { EmployeeService } from '../../services/employee.service';
import { ClientProjectService } from '../../services/client-project.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { getEmployeeSelector } from '../../store/employee/employee.selectors';
import * as employeeActions from '../../store/employee/employee.actions'
import * as clientActions from '../../store/client/client.actions'
import { getClientProjectsSelector, getClientsSelector } from '../../store/client/client.selectors';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AsyncPipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {
  store = inject(Store)
  projectForm: FormGroup = new FormGroup({
    "clientProjectId": new FormControl(0),
    "projectName": new FormControl("", [Validators.required, Validators.minLength(5)]),
    "startDate": new FormControl(""),
    "expectedEndDate": new FormControl(""),
    "leadByEmpId": new FormControl(0),
    "completedDate": new FormControl(""),
    "contactPerson": new FormControl(""),
    "contactPersonContactNo": new FormControl(""),
    "totalEmpWorking": new FormControl(0),
    "projectCost": new FormControl(0),
    "projectDetails": new FormControl(""),
    "contactPersonEmailId": new FormControl(""),
    "clientId": new FormControl(0)
  })
  employeeList$
  clientList$
  clientProjectList$
  clientService = inject(ClientService)
  employeeService = inject(EmployeeService)
  clientProjectService = inject(ClientProjectService)
  constructor() {
    this.employeeList$ = this.store.select(getEmployeeSelector)
    this.clientList$ = this.store.select(getClientsSelector)
    this.clientProjectList$ = this.store.select(getClientProjectsSelector)
  }
  getAllClients() {
    this.store.dispatch(clientActions.getClients())
  }
  getAllEmployee() {
    this.store.dispatch(employeeActions.getEmployees())
  }
  getAllClientProjects() {
    this.store.dispatch(clientActions.getAllClientProjects())
  }
  addUpdateClientProject() {
    this.clientProjectService.addUpdateClientProject(this.projectForm.getRawValue()).subscribe((res: IResponse) => {
      // this.alert(res.message, 'success')
      if (res.result) {
        this.reset()
        this.getAllClientProjects()
      }
    })
  }
  reset() { }
  ngOnInit() {
    this.getAllClientProjects()
    this.getAllClients()
    this.getAllEmployee()
  }
}