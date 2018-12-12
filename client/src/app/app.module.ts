import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {ArticleModule} from './article/article.module';
import {EditorModule} from './editor/editor.module';
import {SharedModule} from './shared/shared.module';
import {TrunkModule} from './trunk/trunk.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ArticleModule,
    EditorModule,
    SharedModule,
    TrunkModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
