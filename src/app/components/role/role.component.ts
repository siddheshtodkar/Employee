import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IResponse, IRole } from '../../models/interfaces/role';

@Component({
  selector: 'app-role',
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  service = inject(MasterService)
  roleList: IRole[]=[]
  constructor() { }
  getAllRoles() {
    this.service.getAllRoles().subscribe((res: IResponse) => {
      this.roleList = res.data as IRole[]
    })
  }
  ngOnInit(): void {
    this.getAllRoles()
  }
}
