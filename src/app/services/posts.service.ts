import { Injectable } from '@angular/core';
import {Post} from '../models/posts.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.getPosts();
  }


  public getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostsSubject();
        }
      );
  }

  public emitPostsSubject() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    this.httpClient
      .put('https://apppostsangular.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('enregistrement terminer');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostsSubject();
    this.router.navigate(['/posts']);

  }

  removePost(postRemove: Post) {
    const postIndexRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === postRemove) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexRemove, 1);
    this.savePosts();
    this.emitPostsSubject();
  }

}
