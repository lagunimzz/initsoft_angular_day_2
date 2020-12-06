import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: AngularFireList<any>;
  posts: any;
  constructor(private db: AngularFireDatabase) {
    this.post = db.list('/post');
  }

  addPost(event: any): void {
    if (event.key === 'Enter') {
      this.post.push(event.target.value);
      event.target.value = '';
    }
  }

  ngOnInit(): void {
    this.post.valueChanges().subscribe((post) => {
      this.posts = post;
    });
  }
}
