import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flexi';
  numberOfChars=0;
  @ViewChild ('charsModel',{static:true}) viewVar :any;
  allVowels:any=[]


  changeFun(e:any){
    this.numberOfChars=e.target.value.length;
    this.allVowels=[];
    for(let i=0;i<this.title.length;i++){
      if(['a','e','i','o','u'].includes(this.title[i].toLowerCase())){
        this.allVowels.push(this.title[i])
      }
    }
    console.log('allVowels',this.allVowels);

  }
  trackByFn(index:any,item:any){
    return item;
  }

}
