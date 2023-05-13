import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // @Output() onToggleSideNav: EventEmitter<SidenavToggle> = new EventEmiter()

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;
  
  //-la functia aceasta '@HostListener onResize' face sa nu se mai acea mutare a body-ului...
  // ... spre dreapta si face direct ovelay meniului-
  // @HostListener('windows:resize', ['event'])
  // onResize(event: any){
  //   this.screenWidth = window.innerWidth;
  //   if(this.screenWidth <= 768){
  //     this.collapsed = false;
  //     this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  //   }
  // }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }
}
