import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { fadeInOutAnimation } from '../../../shared/animations/animation';

@Component({
  selector: 'app-eye-ball-page',
  standalone: true,
  imports: [],
  templateUrl: './eye-ball-page.component.html',
  styleUrl: './eye-ball-page.component.scss',
  animations: [fadeInOutAnimation],
})
export class EyeBallPageComponent {

  private isPHeld = false;
  private intervalId: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if ((event.key === 'p' || event.key === 'P') && !this.isPHeld) {
      this.isPHeld = true;
      console.log("'P' key held down!");

      // Start repeating action
      this.intervalId = setInterval(() => {
        console.log("Action while holding 'P'...");
      }, 200); // Adjust interval time as needed

      this.changeStyle();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'p' || event.key === 'P') {
      this.isPHeld = false;
      console.log("'P' key released!");

      // Stop repeating action
      clearInterval(this.intervalId);
      
      this.resetStyle();
    }
  }


  changeStyle() {
    const video5 = this.el.nativeElement.querySelector('.video5-container');
    const video4 = this.el.nativeElement.querySelector('.video4-container');
    const video3 = this.el.nativeElement.querySelector('.video3-container');
    const video2 = this.el.nativeElement.querySelector('.video2-container');
    const video1 = this.el.nativeElement.querySelector('.video1-container');
    const prodigmaOrg = this.el.nativeElement.querySelector('.prodigma-org-container');
    const prodigmaPin = this.el.nativeElement.querySelector('.prodigma-pin-container');
    this.renderer.setStyle(video5, 'top', '285px');
    this.renderer.setStyle(video5, 'right', '212px');
    this.renderer.setStyle(video5, 'rotate', '18deg');
    this.renderer.setStyle(video4, 'top', '696px');
    this.renderer.setStyle(video4, 'right', '125px');
    this.renderer.setStyle(video3, 'top', '670px');
    this.renderer.setStyle(video3, 'right', '742px');
    this.renderer.setStyle(video3, 'rotate', '-27deg');
    this.renderer.setStyle(video2, 'top', '502px');
    this.renderer.setStyle(video2, 'right', '1080px');
    this.renderer.setStyle(video2, 'rotate', '-18deg');
    this.renderer.setStyle(video1, 'top', '165px');
    this.renderer.setStyle(video1, 'right', '629px');
    this.renderer.setStyle(prodigmaOrg, 'top', '-2px');
    this.renderer.setStyle(prodigmaOrg, 'right', '49px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '27deg');
    this.renderer.setStyle(prodigmaPin, 'top', '483px');
    this.renderer.setStyle(prodigmaPin, 'right', '643px');
    this.renderer.setStyle(prodigmaPin, 'rotate', '-51deg');
  }

  resetStyle() {
    const video5 = this.el.nativeElement.querySelector('.video5-container');
    const video4 = this.el.nativeElement.querySelector('.video4-container');
    const video3 = this.el.nativeElement.querySelector('.video3-container');
    const video2 = this.el.nativeElement.querySelector('.video2-container');
    const video1 = this.el.nativeElement.querySelector('.video1-container');
    const prodigmaOrg = this.el.nativeElement.querySelector('.prodigma-org-container');
    const prodigmaPin = this.el.nativeElement.querySelector('.prodigma-pin-container');
    this.renderer.setStyle(video5, 'top', '338px');
    this.renderer.setStyle(video5, 'right', '125px');
    this.renderer.removeStyle(video5, 'rotate');
    this.renderer.setStyle(video4, 'top', '242px');
    this.renderer.setStyle(video4, 'right', '207px');
    this.renderer.setStyle(video3, 'top', '141px');
    this.renderer.setStyle(video3, 'right', '123px');
    this.renderer.removeStyle(video3, 'rotate');
    this.renderer.setStyle(video2, 'top', '161px');
    this.renderer.setStyle(video2, 'right', '206px');
    this.renderer.removeStyle(video2, 'rotate');
    this.renderer.setStyle(video1, 'top', '102px');
    this.renderer.setStyle(video1, 'right', '279px');
    this.renderer.setStyle(prodigmaOrg, 'top', '625px');
    this.renderer.setStyle(prodigmaOrg, 'right', '368px');
    this.renderer.removeStyle(prodigmaOrg, 'rotate');
    this.renderer.setStyle(prodigmaPin, 'top', '511px');
    this.renderer.setStyle(prodigmaPin, 'right', '374px');
    this.renderer.removeStyle(prodigmaPin, 'rotate');
  }

}