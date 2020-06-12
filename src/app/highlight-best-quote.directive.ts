import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBestQuote]'
})
export class HighlightBestQuoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'tomato';
   }

}
