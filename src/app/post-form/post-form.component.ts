import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/posts.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private postsService: PostsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const createdAt = this.postForm.get('date').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const newPost = new Post(title, content, loveIts, createdAt);

    this.postsService.createPost(newPost);

  }

}
