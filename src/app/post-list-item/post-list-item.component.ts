import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/posts.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts++;
    this.postsService.savePosts();
  }

  onDontLoveIt() {
    this.post.loveIts--;
    this.postsService.savePosts();
  }

  deletePost(post) {
    this.postsService.removePost(post);
  }

}
