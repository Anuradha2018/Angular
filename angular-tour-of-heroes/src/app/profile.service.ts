import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Profile;
  constructor() { }
  getProfile(): Observable<Profile> {
    this.profile = {name : 'ANISH', comapny: 'AMAZON' };
    return of(this.profile);
    }
}
