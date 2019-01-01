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

  publish (key, title, description, author, content, type, articleKey) {
    return this.http.post(myConfig.baseUrl + 'publish', {
      key: key,
      article: {
        title: title,
        description: description,
        author: author,
        content: content,
        type: type,
        key: articleKey
      }
    });
  }

  getArticles () {
    return this.http.get(myConfig.baseUrl + 'getArticles');
  }

  getArticleById (id, key) {
    return this.http.post(myConfig.baseUrl + 'getArticleById', {
      id: id,
      key: key
    });
  }

  deleteArticleById(id) {
    return this.http.post(myConfig.baseUrl + 'deleteArticleById', {
      id: id
    });
  }
}
