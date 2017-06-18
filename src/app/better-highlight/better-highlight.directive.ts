import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from "@angular/core";
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor :string;
  constructor(private elementRef: ElementRef,private renderer : Renderer2){

  }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
  }

  @HostListener('mouseenter') onMouseEnter(event:Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(event:Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green');
    this.backgroundColor = this.defaultColor;
  }
}
