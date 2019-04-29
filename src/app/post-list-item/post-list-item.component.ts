import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts++;
    console.log('love' + this.loveIts);
  }

  onDontLoveIt() {
    this.loveIts --;
    console.log('Don\'t love' + this.loveIts);
  }

}
