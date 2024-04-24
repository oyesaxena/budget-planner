import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

  constructor() { }

   getClassName(shape:any, color:any) {
    return shape + '-' + color;
  }
}
