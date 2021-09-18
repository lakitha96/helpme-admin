import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MapsService} from './maps.service';
import {BackendClient} from '../../backend.client';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'maps-cmp',
  templateUrl: 'maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent extends MapsService implements OnInit {
  public locations: any;

  constructor(private backendClient: BackendClient) {
    super();
  }

  ngOnInit() {
    this.getAllOngoingHelpRequestsMapLocations();
  }
  getAllOngoingHelpRequestsMapLocations() {
    this.backendClient.getAllOngoingHelpRequestsMapLocations().subscribe((response: any) => {
      this.locations = response.data;
      console.log(this.locations)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
