import {Component, OnInit} from '@angular/core';
import {BackendClient} from '../../backend.client';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'organizations-cmp',
  moduleId: module.id,
  templateUrl: 'organizations.component.html'
})

export class OrganizationsComponent implements OnInit {
  displayedColumns: string[] = ['orgName', 'location', 'username', 'email', 'action'];
  dataSource: any;
  allOrganizationDataSource: any;

  constructor(private backendClient: BackendClient, private route: Router) {
  }

  ngOnInit(): void {
    this.getPendingOrganizations();
    this.getAllOrganizations();
  }

  getPendingOrganizations() {
    this.backendClient.getPendingOrganizations().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  getAllOrganizations() {
    this.backendClient.getAllOrganizations().subscribe((response: any) => {
      this.allOrganizationDataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  approveOrganization(uuid: any) {
    this.backendClient.approveOrganization(uuid).subscribe((response: any) => {
      this.getPendingOrganizations();
      this.getAllOrganizations();
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  blockOrganization(uuid: any) {
    this.backendClient.temporaryBlockOrganization(uuid).subscribe((response: any) => {
      this.getPendingOrganizations();
      this.getAllOrganizations();
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
