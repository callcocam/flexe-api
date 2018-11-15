import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appSelect2]'
})
export class Select2Directive{
  

  constructor(public el:ElementRef) { 
   
  }


  ngOnInit(): void {
        console.log(this.el.nativeElement)

    jQuery(this.el.nativeElement).select2();
  }
}
