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
    this.profile.comapny = 'RR';
    this.profile.name = 'Anu';
    return of(this.profile);
  }
}
