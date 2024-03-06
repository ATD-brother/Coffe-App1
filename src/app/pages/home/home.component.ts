import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/controls/material-ang/material.modules';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const aradCoord = fromLonLat([21.299164883859493, 46.1968485973083]);

    const marker = new Feature({
      geometry: new Point(aradCoord),
    });

    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
      }),
    });

    marker.setStyle(markerStyle);

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: aradCoord,
        zoom: 15,
      }),
    });
  }


  cards = [
    {
      id: 1,
      image: 'assets/images/HomePage/Coffee.png',
      name: 'Cappacino',
      description:
        'lorem inoihasdogi odshgoui hsuioghus ah u hgoiusadfhgasiufhg aisdhsoh',
      price: '$23',
    },
    {
      id: 2,
      image: 'assets/images/HomePage/mocha.png',
      name: 'Mocha',
      description:
        ' oihf adsouadhgfoiu sagduifgias dgfsdgfipugsdaf uisd gfkusadgf f fsdgfiups ',
      price: '$12',
    },
    {
      id: 3,
      image: 'assets/images/HomePage/late.png',
      name: 'Latte',
      description:
        'vxzc hifkuhgsda sdfgiu fdikusfdf hfoiush vhosud vh sdu vhhsdbvop svfudb',
      price: '$33',
    },
    {
      id: 4,
      image: 'assets/images/HomePage/cold-coffe.png',
      name: 'Cold Java',
      description: 'saefg egew rgefg dfg d',
      price: '$23',
    },
    {
      id: 5,
      image: 'assets/images/HomePage/Coffee.png',
      name: 'Cold Java',
      description: ' sdfg dfsgsdfg sdfg sdfh dfsg',
      price: '$51',
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

  clients = [
    {
      personImg:
        'https://ca.slack-edge.com/TCZPF5WAZ-U05MNLVBJ2F-09e8f1e07877-72',
      Title: 'As good as advertised',
      content: 'Lorem ipsum dolor sot a,emt comsecterir adsipic eliter',
      name: 'Alexandru Mihai',
    },
    {
      personImg:
        'https://ca.slack-edge.com/TCZPF5WAZ-U05MNLVBJ2F-09e8f1e07877-72',
      Title: 'As good as advertised',
      content: 'Lorem ipsum dolor sot a,emt comsecterir adsipic eliter',
      name: 'Alexandru Mihai',
    },
    {
      personImg:
        'https://ca.slack-edge.com/TCZPF5WAZ-U05MNLVBJ2F-09e8f1e07877-72',
      Title: 'As good as advertised',
      content: 'Lorem ipsum dolor sot a,emt comsecterir adsipic eliter',
      name: 'Alexandru Mihai',
    },
  ];
}
