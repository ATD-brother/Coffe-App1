import { Component } from '@angular/core';
import { MaterialModule } from '../material-ang/material.modules';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MaterialModule,RouterModule,],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
