import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.scss'],
})
export class ContactImageDetailComponent implements OnInit {
  avatar: string;
  constructor() {}

  ngOnInit(): void {}
}
