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
      description: 'lorem inoihasdogi odshgoui hsuioghus ah u hgoiusadfhgasiufhg aisdhsoh',
      price: '123',
    },
    {
      id: 2,
      image: 'assets/images/HomePage/mocha.png',
      name: 'Mocha',
      description: ' oihf adsouadhgfoiu sagduifgias dgfsdgfipugsdaf uisd gfkusadgf f fsdgfiups ',
      price: '123',
    },
    {
      id: 3,
      image: 'assets/images/HomePage/late.png',
      name: 'Latte',
      description: 'vxzc hifkuhgsda sdfgiu fdikusfdf hfoiush vhosud vh sdu vhhsdbvop svfudb',
      price: '123',
    },
    {
      id: 4,
      image: 'assets/images/HomePage/cold-coffe.png',
      name: 'Cold Java',
      description: 'saefg egew rgefg dfg d',
      price: '123',
    },
    {
      id: 5,
      image: 'assets/images/HomePage/Coffee.png',
      name: 'Cold Java',
      description: ' sdfg dfsgsdfg sdfg sdfh dfsg',
      price: '123',
    },
  ];

  startIndex = 0;
  endIndex = 2;

  prevCard(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.endIndex--;
    }
  }

  nextCard(): void {
    if (this.endIndex < this.cards.length - 1) {
      this.startIndex++;
      this.endIndex++;
    }
  }
}
