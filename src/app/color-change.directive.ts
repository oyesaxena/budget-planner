import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
  standalone: true,
  host:{
    '(click)':'applyLog()'
  }
})
export class ColorChangeDirective {

  el!:ElementRef
  @Input() num=0;
  @Input() div=1;

  constructor(el:ElementRef) {
    this.el=el;
   }

applyLog(){
  if(this.num%this.div===0){
    this.el.nativeElement.style.color='red'
  }
  else{
        this.el.nativeElement.style.color='green'

  }
}

}
