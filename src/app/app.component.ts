import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgFor, NgClass, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SIDENAV_ITEMS, TOPBAR_CONFIG } from './shared/config/ui.config';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
    NgFor,
    ToolbarModule,
    MenuModule,
    AvatarModule,
    ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alphaTest-ai-app';
  topbar = TOPBAR_CONFIG;
  sidenav = SIDENAV_ITEMS;
  sidebarVisible = true;
  
}
