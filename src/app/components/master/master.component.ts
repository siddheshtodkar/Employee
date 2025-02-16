import { Component, inject } from '@angular/core';
import { RoleComponent } from '../role/role.component';
import { NgClass } from '@angular/common';
import { DesignationComponent } from '../designation/designation.component';
import { MasterService } from '../../services/master.service';
import { IDashboard, IResponse } from '../../models/interfaces/role';

@Component({
  selector: 'app-master',
  imports: [RoleComponent, NgClass, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  masterService = inject(MasterService)
  componentSelected: string = 'Roles'
  dashboardData: IDashboard = {
    "totalClient": 0,
    "totalEmployee": 0,
    "totalDesignation": 0
  }
  getDasboardData() {
    this.masterService.getDasboardData().subscribe((body: IResponse) => {
      if (body.result)
        this.dashboardData = body.data![0] as IDashboard
    })
  }
  ngOnInit() {
    this.getDasboardData()
  }
}
