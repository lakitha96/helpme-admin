import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard',     title: 'Reports',         icon:'nc-bank', class: '' },
    { path: '/organizations',     title: 'Organizations',         icon:'nc-bank',       class: '' },
    { path: '/users',     title: 'Users',         icon:'nc-single-02',       class: '' },
    { path: '/help-requests',     title: 'Help Requests',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/funds',     title: 'Funds',         icon:'nc-credit-card',       class: '' },
    { path: '/maps',          title: 'Map',              icon:'nc-pin-3',      class: '' },
    // { path: '/user-profile',          title: 'User Profile',      icon:'nc-settings-gear-65',  class: '' }
//     { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
//     { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
//     { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
//     { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
//     { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
    ];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
