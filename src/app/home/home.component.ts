import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){
    
  }
}
