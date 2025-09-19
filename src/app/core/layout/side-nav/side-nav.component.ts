import { Component } from '@angular/core';
import { SIDENAV_ITEMS } from '../../../shared/config/ui.config';
import { NavItem } from '../../../shared/models/ui.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule, RouterModule,],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  sideNav:NavItem[]=SIDENAV_ITEMS;
}
