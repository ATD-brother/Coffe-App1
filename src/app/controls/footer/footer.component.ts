import { Component } from '@angular/core';
import { MaterialModule } from '../material-ang/material.modules';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
