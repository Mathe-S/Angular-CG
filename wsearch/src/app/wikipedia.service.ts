import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  public search(term: string): string {
    return `search requested`;
  }
}
