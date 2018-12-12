import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article/article.component';
import {EditorComponent} from './editor/editor/editor.component';
import {HomeComponent} from './trunk/home/home.component';
import {PlaygroundComponent} from './trunk/playground/playground.component';

const routes: Routes = [
  {path: 'article/:id', component: ArticleComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
