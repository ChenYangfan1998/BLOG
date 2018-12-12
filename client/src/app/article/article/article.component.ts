import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators';
import {ArticleService} from '../../service/logic/article.service';
declare let marked: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleId$;
  articleId;

  article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleId$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        params.get('id'))
    );
    this.articleId$.subscribe(
      (id) => {
        this.articleId = id;
        this.articleService.getArticleById(id).subscribe(
          (res) => {
            this.article = res;
            document.getElementById('output').innerHTML =
              marked(this.article.content);
          }
        );
      }
    );
  }

}
