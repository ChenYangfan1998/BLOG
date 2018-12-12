import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/logic/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  articles;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      (data) => {
        this.articles = data;
      }
    );
  }

  toArticle (article) {
    this.router.navigateByUrl('/article/' + article.id);
  }

}
