import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpErrorResponse} from '@angular/common/http';
import {BackendClient} from '../../backend.client';
import {Router} from '@angular/router';

@Component({
    selector: 'users-cmp',
    moduleId: module.id,
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit{
  displayedColumns: string[] = ['email', 'name', 'role', 'status'];
  dataSource: any;


  getAllUsers() {
    this.backendClient.getAllUsers().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  constructor(private backendClient: BackendClient, private route: Router) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
