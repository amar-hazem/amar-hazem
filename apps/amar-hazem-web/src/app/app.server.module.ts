import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { LayoutComponent } from './layout/layout.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [LayoutComponent],
})
export class AppServerModule {}
