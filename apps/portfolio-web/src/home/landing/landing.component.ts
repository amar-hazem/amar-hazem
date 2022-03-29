import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** Component used to display the home page. */
@Component({
  selector: 'aha-landing',
  styleUrls: ['./landing.component.scss'],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  /** Whether the user's device is a handset or not. */
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: any) => result.matches));

  /**
   * Inject dependencies into component.
   * @param {BreakpointObserver} breakpointObserver
   * @param {DomSanitizer} domSanitizer
   * @param {MatIconRegistry} matIconRegistry
   * @param {BreakpointObserver} breakpointObserver
   * @param {ViewportScroller} viewportScroller
   */
  constructor(
    private breakpointObserver: BreakpointObserver,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private viewportScroller: ViewportScroller
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/linkedin.svg')
    );
  }

  /**
   * Scroll to the specified anchor.
   */
  public scrollToAbout(): void {
    this.isHandset$.subscribe((isHandset: boolean) => {
      if (!isHandset) {
        this.viewportScroller.setOffset([0, 64]);
      } else {
        this.viewportScroller.setOffset([0, 56]);
      }
      this.viewportScroller.scrollToAnchor('about');
    });
  }
}
