import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoleComponent } from './components/role/role.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee';
}
