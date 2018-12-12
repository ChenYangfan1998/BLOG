import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {myConfig} from '../../config/my-config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  publish (key, title, description, author, content, type) {
    return this.http.post(myConfig.baseUrl + 'publish', {
      key: key,
      article: {
        title: title,
        description: description,
        author: author,
        content: content,
        type: type
      }
    });
  }

  getArticles () {
    return this.http.get(myConfig.baseUrl + 'getArticles');
  }

  getArticleById (id) {
    return this.http.post(myConfig.baseUrl + 'getArticleById', {
      id: id
    });
  }

  deleteArticleById(id) {
    return this.http.post(myConfig.baseUrl + 'deleteArticleById', {
      id: id
    });
  }
}
