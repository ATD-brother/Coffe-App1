import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/controls/material-ang/material.modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards = [
    {
      id: 1,
      image: 'assets/images/HomePage/Coffee.png',
      name: 'Cappacino',
      description: '',
      pirce: '',
    },
    {
      id: 2,
      image: 'assets/images/HomePage/mocha.png',
      name: 'Mocha',
      description: '',
      pirce: '',
    },
    {
      id: 3,
      image: 'assets/images/HomePage/late.png',
      name: 'Latte',
      description: '',
      pirce: '',
    },
    {
      id: 4,
      image: 'assets/images/HomePage/cold-coffe.png',
      name: 'Cold Java',
      description: '',
      pirce: '',
    },
    {
      id: 5,
      image: 'assets/images/HomePage/Coffee.png',
      name: 'Cold Java',
      description: '',
      pirce: '',
    },
  ];
}
