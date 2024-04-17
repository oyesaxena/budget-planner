import { Component } from '@angular/core';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone:true,
  imports:[FontAwesomeModule,AboutUsComponent]
})
export class NavigationComponent  {
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
}