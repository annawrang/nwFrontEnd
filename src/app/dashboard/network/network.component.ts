import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  public networks;

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.networkService.getNetworks().subscribe(data => {
      this.networks = data;
      console.log(data);
    })
  }

}
