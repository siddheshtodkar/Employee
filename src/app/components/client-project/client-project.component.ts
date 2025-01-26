import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {
  projectForm: FormGroup = new FormGroup({
    "clientProjectId": new FormControl(0),
    "projectName": new FormControl(""),
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
}
