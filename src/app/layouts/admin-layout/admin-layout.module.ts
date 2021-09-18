import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AdminLayoutRoutes} from './admin-layout.routing';

// dashboard components
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {OrganizationsComponent} from '../../pages/organizations/organizaztions.component';
import {UsersComponent} from '../../pages/users/users.component';
import {HelpRequestsComponent} from '../../pages/help-requests/helpRequests.component';
import {FundsComponent} from '../../pages/funds/funds.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {MapsComponent} from '../../pages/maps/maps.component';

import {TableComponent} from '../../pages/table/table.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UpgradeComponent} from '../../pages/upgrade/upgrade.component';
import {MatTableModule} from '@angular/material/table';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBteEPCEudB9YuRTAXXUTcG08kmeNdWt-0'
    }),
    FormsModule,
    NgbModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    OrganizationsComponent,
    UsersComponent,
    HelpRequestsComponent,
    FundsComponent,
    UserProfileComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {
}
