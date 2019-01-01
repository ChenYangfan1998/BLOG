import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/logic/article.service';
declare let marked: any;


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  key;
  title;
  description;
  author = '陈扬帆';
  content;
  type;
  articleKey;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
  }

  mdChanged() {
    document.getElementById('output').innerHTML =
      marked(this.content);
  }

  submit () {
    this.articleService.publish(
      this.key,
      this.title,
      this.description,
      this.author,
      this.content,
      this.type,
      this.articleKey
    ).subscribe(
      () => {
        alert('done');
      }, (err) => {
        alert(err.error.error);
      }
    );
  }
}
