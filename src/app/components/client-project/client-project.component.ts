import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IClientProject, IEmployee, IResponse } from '../../models/interfaces/role';
import { Client } from '../../models/classes/client';
import { ClientService } from '../../services/client.service';
import { EmployeeService } from '../../services/employee.service';
import { ClientProjectService } from '../../services/client-project.service';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {
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
  employeeList: IEmployee[] = []
  clientList: Client[] = []
  clientProjectList = signal<IClientProject[]>([])
  clientService = inject(ClientService)
  employeeService = inject(EmployeeService)
  clientProjectService = inject(ClientProjectService)
  message: string = ''
  alertType: string = ''
  constructor() { }
  getAllClients() {
    this.clientService.getAllClients().subscribe((res: IResponse) => {
      this.clientList = res.data as Client[]
    })
  }
  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((res: IResponse) => {
      this.employeeList = res.data as IEmployee[]
    })
  }
  getAllClientProjects() {
    this.clientProjectService.getAllClientProjects().subscribe((res: IResponse) => {
      this.clientProjectList.set(res.data as IClientProject[])
    })
  }
  addUpdateClientProject() {
    this.clientProjectService.addUpdateClientProject(this.projectForm.getRawValue()).subscribe((res: IResponse) => {
      this.alert(res.message, 'success')
      if (res.result) {
        this.reset()
        this.getAllClientProjects()
      }
    })
  }
  reset() { }
  alert(message: string, alertType: string) {
    this.message = message
    this.alertType = alertType
  }
  ngOnInit() {
    this.getAllClientProjects()
    this.getAllClients()
    this.getAllEmployee()
  }
}