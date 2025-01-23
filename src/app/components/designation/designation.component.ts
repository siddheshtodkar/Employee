import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IResponse, IDesignation } from '../../models/interfaces/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
service = inject(MasterService)
  designationsList: IDesignation[]=[]
  constructor() { }
  getAllDesignation() {
    this.service.getAllDesignation().subscribe((res: IResponse) => {
      this.designationsList = res.data as IDesignation[]
    })
  }
  ngOnInit(): void {
    this.getAllDesignation()
  }
}
