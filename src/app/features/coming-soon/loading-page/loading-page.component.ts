import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { EyeBallPageComponent } from '../eye-ball-page/eye-ball-page.component';
import { fadeInOutAnimation } from '../../../shared/animations/animation';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [EyeBallPageComponent],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
  animations: [fadeInOutAnimation],
})
export class LoadingPageComponent implements OnInit, AfterViewInit {
  componentStates = {
    componentA: true,
    componentB: false,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  // Simulate the delay and trigger the animation
  ngOnInit() {
    setTimeout(() => {
      this.componentStates.componentA = false; 
      this.componentStates.componentB = true
    }, 3000); // 1 saniye sonra
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const layer2 = document.getElementById('layer2') as HTMLElement;
      const loadingText = document.getElementById('loading-percent') as HTMLElement;

      let currentLeft = 0;
      let currentPercentage = 0;
      const targetLeft = 100;
      const targetPercentage = 100;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (timestamp: number) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        currentLeft = targetLeft * progress;
        currentPercentage = Math.floor(targetPercentage * progress);
       
        layer2.style.left = `${currentLeft}%`;
        loadingText.textContent = `${currentPercentage} %`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }

      };

      requestAnimationFrame(animate);
    }
  }
}
