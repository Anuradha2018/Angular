import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  profile: Profile;
  ngOnInit() {
    this.getProfile();
  }
  getProfile(): void {
    this.profileService.getProfile()
    .subscribe(profiles => this.profile = profiles);
  }
}


