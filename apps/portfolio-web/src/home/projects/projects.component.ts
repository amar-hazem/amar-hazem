import { Component, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

/** Component used to display the home page. */
@Component({
  selector: 'por-projects',
  styleUrls: ['./projects.component.scss'],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  /**
   * Inject dependencies into component.
   * @param {DomSanitizer} domSanitizer
   * @param {MatIconRegistry} matIconRegistry
   * @param {Renderer2} renderer2
   */
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private renderer2: Renderer2
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
}
