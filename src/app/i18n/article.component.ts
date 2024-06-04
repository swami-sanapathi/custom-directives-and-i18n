import { Component, signal } from "@angular/core";

@Component({
  selector: "app-article",
  standalone: true,
  template: `
    <div class="article-container">
      <div class="article-header">
        <h2 class="article-title" i18n>
          You will see angular i18n example here
        </h2>
        <p class="article-author">Author: {{ authorName() }}</p>
      </div>
      <div class="article-content">
        <p i18n>
          In this article you will learn how to use angular i18n to translate
          your application to multiple languages. and also how to use custom
          directives in angular.
        </p>
      </div>
    </div>
  `,
  styles: `
    .article-container {
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
    }
    .article-header {
        margin-bottom: 10px;
    }
    .article-title {
      font-size: 18px;
      font-weight: bold;
    }
    .article-author {
      font-size: 14px;
      color: #777;
    }
    .article-content {
      margin-top: 10px;
    }
    .article-content p {
      margin-bottom: 10px;
    }
  `,
})
export default class Article {
  protected authorName = signal<string>("Swami");
}
