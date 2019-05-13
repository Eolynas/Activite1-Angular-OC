import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';
import {Post} from '../models/posts.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  allPosts = [];
  postsSubscription: Subscription;

  /*@Input() posts;*/
  constructor(private router: Router, private postsService: PostsService) {
  }


  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      posts => {
        this.allPosts = posts;
      }
    );
    this.postsService.emitPostsSubject();
    console.log(this.allPosts);
  }


  onSave() {
    this.postsService.savePosts();
  }



}
