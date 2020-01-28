import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NewsService }  from '../news/news.service';
import { News } from '../news/news';

@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.css']
})
export class CreateEditFormComponent implements OnInit{
  newsForm;
  isCreate: boolean ;
  post: News;
  publishDay: number;
  publishMonth: number;
  publishYear: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: NewsService
  ) {
    this.newsForm = this.formBuilder.group({
      title: '',
      description: '',
      content: '',
      urlToImage: '',
      date: '',
      author: '',
      url: '',
    });
  }

  ngOnInit() {
    this.isCreate = (this.route.snapshot.routeConfig.path === 'Create');
    this.post = this.service.getPost(this.route.snapshot.params.title);
    if (this.post) {
      const date = new Date(this.post.publishedAt);
      this.publishDay = date.getDay();
      this.publishMonth = date.getMonth();
      this.publishYear = date.getFullYear();
      this.newsForm = this.formBuilder.group({
        title: this.post.title,
        description: this.post.description,
        content: this.post.content,
        urlToImage: this.post.urlToImage,
        date: `${this.publishDay}/${this.publishMonth}/${this.publishYear}`,
        author: this.post.author,
        url: this.post.url,
      });
    }
  }

  logSave(): void {
    this.newsForm.value.source = {'id': null, 'name': 'myCustomNews.org'};
    this.newsForm.value.custom = true;
    this.service.addPost(this.newsForm.value);
    this.router.navigate(['/Main']);
  }

  logCancel(): void {
    this.service.addPost(this.post);
    this.router.navigate(['/Main']);
  }
}
