import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {
  message = 'Hello, ContactListComponent';
  printable = true;
  tabIndex = 1;
  contacts = [
    {
      id: 1,
      name: 'phong',
      job: 'WD',
      avatar: {
        url: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    },
    {
      id: 2,
      name: 'phong2222',
      job: 'WD',
    },
    {
      id: 3,
      name: 'phong655656',
      job: 'WD',
      avatar: {
        url: 'https://www.w3schools.com/w3images/avatar2.png',
      },
    },
  ];

  changeTab(tabIndex) {
    this.tabIndex = tabIndex;
  }
}
