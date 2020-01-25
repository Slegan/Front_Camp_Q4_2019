import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NewsService }  from '../news/news.service';
import { News } from '../news/news';

@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.css']
})
export class CreateEditFormComponent implements OnInit{
  newsForm;
  post: News;
  publishDay: number;
  publishMonth: number;
  publishYear: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: NewsService
  ) {
    this.newsForm = this.formBuilder.group({
      heading: '',
      description: '',
      content: '',
      img: '',
      date: '',
      author: '',
      source: '',
    });
  }

  ngOnInit() {
    this.post = this.service.getPost(this.route.snapshot.params.title);
    if (this.post) {
      const date = new Date(this.post.publishedAt);
      this.publishDay = date.getDay();
      this.publishMonth = date.getMonth();
      this.publishYear = date.getFullYear();
      this.newsForm = this.formBuilder.group({
        heading: this.post.title,
        description: this.post.description,
        content: this.post.content,
        img: this.post.urlToImage,
        date: `${this.publishDay}/${this.publishMonth}/${this.publishYear}`,
        author: this.post.author,
        source: this.post.url,
      });
    }
    console.log(this.post);
  }

  logSave(): void {
    console.log('Save function coming soon');
  }

  logCancel(): void {
    console.log('Cancel function coming soon');
  }
}
