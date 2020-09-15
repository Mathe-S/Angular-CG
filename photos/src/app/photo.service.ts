import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<string> {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random/', {
        headers: {
          Authorization:
            'Client-ID 98eB1E5nCP7rrC8bEglWC5QUjX6qxU5mRajANS-CySc',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
