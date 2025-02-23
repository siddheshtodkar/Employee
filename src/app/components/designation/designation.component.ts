import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Store } from '@ngrx/store';
import * as masterActions from '../../store/master/master.actions'
import { isLoadingDesignationsSelector, isFailureDesignationsSelector, isSuccessDesignationsSelector } from '../../store/master/master.selectors';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-designation',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
  service = inject(MasterService)
  store = inject(Store)
  designationsList$
  isLoading$
  error$
  designation: string = ''
  constructor() {
    this.isLoading$ = this.store.select(isLoadingDesignationsSelector)
    this.designationsList$ = this.store.select(isSuccessDesignationsSelector)
    this.error$ = this.store.select(isFailureDesignationsSelector)
  }
  deleteDesignation(id: number) {
    this.store.dispatch(masterActions.deleteDesignationById({ id: id }))
  }
  addDesignation() {
    this.store.dispatch(masterActions.addDesignation({ designation: this.designation, designationId: 0 }))
    this.designation = ''
  }
  ngOnInit(): void {
    this.store.dispatch(masterActions.getAllDesignations())
  }
}
