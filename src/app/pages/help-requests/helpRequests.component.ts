import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpErrorResponse} from '@angular/common/http';
import {BackendClient} from '../../backend.client';
import {Router} from '@angular/router';

@Component({
  selector: 'helpRequests-cmp',
  moduleId: module.id,
  templateUrl: 'helpRequests.component.html'
})

export class HelpRequestsComponent implements OnInit {
  displayedColumns: string[] = ['username', 'helpType', 'description', 'status', 'location', 'organizationName', 'fundRaisedAmount'];
  dataSource: any;


  getAllHelpRequest() {
    this.backendClient.getAllHelpRequest().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  constructor(private backendClient: BackendClient, private route: Router) {
  }

  ngOnInit(): void {
    this.getAllHelpRequest();
  }
}
