import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slide-images',
  templateUrl: './slide-images.component.html',
  styleUrls: ['./slide-images.component.scss'],
})
export class SlideImagesComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;

  imageObject: Array<object> = [
    {
      image: 'assets/img/1.jpg',
      alt: 'alt of image 1',
      thumbImage: 'assets/img/1_min.jpg',
      title: 'title of image 1',
    },
    {
      image: 'assets/img/2.jpg',
      alt: 'alt of image 2',
      thumbImage: 'assets/img/2_min.jpg',
      title: 'title of image 2 ',
    },
    {
      image: 'assets/img/3.jpg',
      alt: 'alt of image 3',
      thumbImage: 'assets/img/3_min.jpg',
      title: 'title of image 3',
    },
    {
      image: 'assets/img/4.jpg',
      alt: 'alt of image 4',
      thumbImage: 'assets/img/4_min.jpg',
      title: 'title of image 4',
    },
    {
      image: 'assets/img/5.jpg',
      alt: 'alt of image 5',
      thumbImage: 'assets/img/5_min.jpg',
      title: 'title of image 5',
    },
    {
      video: 'https://youtu.be/6pxRHBw-k8M',
    },
    {
      image: 'assets/img/1.jpg',
      alt: 'alt of image 1',
      thumbImage: 'assets/img/1_min.jpg',
      title: 'title of image 1',
    },
    {
      image: 'assets/img/2.jpg',
      alt: 'alt of image 2',
      thumbImage: 'assets/img/2_min.jpg',
      title: 'title of image 2 ',
    },
    {
      image: 'assets/img/3.jpg',
      alt: 'alt of image 3',
      thumbImage: 'assets/img/3_min.jpg',
      title: 'title of image 3',
    },
    {
      image: 'assets/img/1.jpg',
      alt: 'alt of image 1',
      thumbImage: 'assets/img/1_min.jpg',
      title: 'title of image 1',
    },
    {
      image: 'assets/img/2.jpg',
      alt: 'alt of image 2',
      thumbImage: 'assets/img/2_min.jpg',
      title: 'title of image 2 ',
    },
    {
      image: 'assets/img/3.jpg',
      alt: 'alt of image 3',
      thumbImage: 'assets/img/3_min.jpg',
      title: 'title of image 3',
    },
    {
      image: 'assets/img/4.jpg',
      alt: 'alt of image 4',
      thumbImage: 'assets/img/4_min.jpg',
      title: 'title of image 4',
    },
    {
      image: 'assets/img/5.jpg',
      alt: 'alt of image 5',
      thumbImage: 'assets/img/5_min.jpg',
      title: 'title of image 5',
    },
    {
      video: 'https://youtu.be/6pxRHBw-k8M',
    },
    {
      image: 'assets/img/1.jpg',
      alt: 'alt of image 1',
      thumbImage: 'assets/img/1_min.jpg',
      title: 'title of image 1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
