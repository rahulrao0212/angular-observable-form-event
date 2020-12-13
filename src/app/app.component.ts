import { ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable-from-event';
  @ViewChild('btn', { static: true }) button: ElementRef;
  @ViewChild('name', { static: true }) name: ElementRef;


  buttonSubscription: any;

  constructor(private elm: ElementRef) {
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.buttonClick();
    this.keyUp();
    this.scroll();
  }


  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log("click- ", res));
  }


  ngOnDestroy() {
    this.buttonSubscription.unsubscribe()
  }

  scroll() {
    const source = fromEvent(window, 'scroll');
    source.subscribe(val => console.log("scroll- ", val));
  }

  keyUp(){
    fromEvent(this.name.nativeElement, 'keyup')
    .subscribe(res => console.log(res));
  }
 
}
