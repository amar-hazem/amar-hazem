import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'acc-layout',
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements AfterViewInit {
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
   * @param {Renderer2} renderer2
   * @param {ViewportScroller} viewportScroller
   */
  constructor(
    private breakpointObserver: BreakpointObserver,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private renderer2: Renderer2,
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

  public ngAfterViewInit(): void {
    this.renderer2.setStyle(this.renderer2.selectRootElement('#loader'), 'display', 'none');
  }

  /**
   * Scroll to the specified anchor.
   * @param {string} anchor
   */
  public scrollTo(anchor: string): void {
    this.isHandset$.subscribe((isHandset: boolean) => {
      if (!isHandset) {
        this.viewportScroller.setOffset([0, 64]);
      } else {
        this.viewportScroller.setOffset([0, 56]);
      }
      this.viewportScroller.scrollToAnchor(anchor);
    });
  }
}
