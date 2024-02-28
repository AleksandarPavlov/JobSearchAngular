import { Component, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-connect-section',
  templateUrl: './connect-section.component.html',
  styleUrls: ['./connect-section.component.css']
})
export class ConnectSectionComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkVisibility();
  }

  ngAfterViewInit(): void {
    this.checkVisibility(); 
  }
  
  private isInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    let threshold: number;

    if (window.innerWidth <= 767) { 
      threshold = windowHeight * 0.3; 
    } else {
      threshold = windowHeight * 0.2; 
    }

    return (
      rect.top >= -threshold &&
      rect.bottom <= (windowHeight + threshold) &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private checkVisibility(): void {
    if (this.isInViewport()) {
      this.renderer.addClass(this.el.nativeElement.querySelector('#connectdevelop'), 'fade-in');
      this.renderer.addClass(this.el.nativeElement.querySelector('#section-text'), 'fade-in');
      window.removeEventListener('scroll', this.onScroll);
    }
  }
}