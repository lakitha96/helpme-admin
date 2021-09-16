import {Routes} from '@angular/router';

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
import {LoginComponent} from '../../pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'organizations', component: OrganizationsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'help-requests', component: HelpRequestsComponent},
  {path: 'funds', component: FundsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'table', component: TableComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'upgrade', component: UpgradeComponent}
];
