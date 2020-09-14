import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items = [
    {
      imageUrl:
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*',
      title: 'Pasta',
      description: 'Delicious pasta Mama Mia Mario',
    },
    {
      imageUrl:
        'https://dalf.online/wp-content/uploads/2018/10/pizza-con-chorizo-jamon-y-queso.jpg',
      title: 'Pizza',
      description: 'Pizza Luigi pizza',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
