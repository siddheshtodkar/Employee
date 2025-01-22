import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-role',
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  service = inject(MasterService)
  constructor() { }
  getAllRoles() {
    this.service.getAllRoles().subscribe((data: any) => {
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.getAllRoles()
  }
}
