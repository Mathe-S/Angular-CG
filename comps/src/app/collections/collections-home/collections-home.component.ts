import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'John', age: 21, job: 'Designer', employed: false },
    { name: 'David', age: 26, job: 'Engineer', employed: true },
    { name: 'Hoe', age: 19, job: 'Hoe', employed: false },
  ];

  headers = [
    { key: 'name', label: 'name' },
    { key: 'age', label: 'age' },
    { key: 'job', label: 'job' },
    { key: 'employed', label: 'has a job?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
