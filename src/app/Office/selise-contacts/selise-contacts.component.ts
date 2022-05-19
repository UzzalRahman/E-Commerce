import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-selise-contacts',
  templateUrl: './selise-contacts.component.html',
  styleUrls: ['./selise-contacts.component.scss'],
})
export class SeliseContactsComponent implements OnInit {
  selectedTab = 2;
  constructor() {}
  ngOnInit(): void {}
  GoToRoute(routeLink: string) {}
  ChangeTab(change: string) {
    if(change=='right')this.selectedTab++;
    else if (change == 'left')this.selectedTab--;
    
    if (this.selectedTab > 3) this.selectedTab = 1;
    if (this.selectedTab < 1) this.selectedTab = 3;
    
  };
}

