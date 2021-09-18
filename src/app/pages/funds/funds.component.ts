import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpErrorResponse} from '@angular/common/http';
import {BackendClient} from '../../backend.client';
import {Router} from '@angular/router';

@Component({
  selector: 'funds-cmp',
  moduleId: module.id,
  templateUrl: 'funds.component.html'
})

export class FundsComponent implements OnInit {
  displayedColumns: string[] = ['helpRequestUsername', 'contactNumber', 'totalRaisedAmount', 'expireDate', 'helpType', 'status', 'donationsDetails'];
  displayedColumnsDonations: string[] = ['username', 'amount', 'donatedDate', 'status'];
  dataSource: any;
  dataSourceDonations: any;


  getAllFundRequest() {
    this.backendClient.getAllFundRequest().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  constructor(private backendClient: BackendClient, private route: Router) {
  }

  ngOnInit(): void {
    this.getAllFundRequest();
  }

  viewDonationsDetails(fundRequestUuid: any) {
    this.backendClient.viewAllDonationDetails(fundRequestUuid).subscribe((response: any) => {
      this.dataSourceDonations = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
