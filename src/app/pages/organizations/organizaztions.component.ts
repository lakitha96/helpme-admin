import {Component, OnInit} from '@angular/core';
import {BackendClient} from '../../backend.client';
import {Router} from '@angular/router';

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
  displayedColumns: string[] = ['helpRequestId', 'username', 'amount', 'donatedDate'];
  dataSource: any;

  constructor(private backendClient: BackendClient, private route: Router) {
  }

  ngOnInit(): void {
    this.getDonationHistory();
  }

  getDonationHistory() {
    // this.donationClient.getDonationHistoryForFundRequestId(this.fundRequestUuid).subscribe((response: any) => {
    //   this.dataSource = new MatTableDataSource(response.data);
    //   console.log(this.dataSource)
    // }), (error: HttpErrorResponse) => {
    //   alert(error.message);
    // }
  }
}
