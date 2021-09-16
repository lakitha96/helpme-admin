import {Component, OnInit} from '@angular/core';
import {BackendClient} from '../../backend.client';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {HttpErrorResponse} from '@angular/common/http';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'organizations-cmp',
  moduleId: module.id,
  templateUrl: 'organizations.component.html'
})

export class OrganizationsComponent implements OnInit {
  displayedColumns: string[] = ['orgName', 'location', 'username', 'email', 'action'];
  dataSource: any;

  constructor(private backendClient: BackendClient, private route: Router) {
  }

  ngOnInit(): void {
    this.getPendingOrganizations();
  }

  getPendingOrganizations() {
    this.backendClient.getPendingOrganizations().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
