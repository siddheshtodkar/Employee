import { Component } from '@angular/core';
import { RoleComponent } from '../role/role.component';
import { NgClass } from '@angular/common';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-master',
  imports: [RoleComponent, NgClass, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  componentSelected:string='Roles'
}
