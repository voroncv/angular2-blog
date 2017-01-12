import { Component } from '@angular/core';

export class Post {
  id: number;
  title: string;
  littledesc: string;
  desc: string;
  image: string;
  date: string;
  city: string;
}

const POSTS: Post[] = [
      {
        id: 1,
        title: 'On the road again',
        littledesc: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
        desc: 'Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.',
        image: 'images/road.jpg',
        date: '12.01.2017',
        city: 'The Newist',
      }, {
        id: 1,
        title: 'Shopping',
        littledesc: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
        desc: 'Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.',
        image: 'images/shopping.jpg',
        date: '13.01.2017',
        city: 'The Newist',
      }
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  posts = POSTS;
  selected: Post;

  onSelect(post: Post): void {
    this.selected = post;
  }

  change() {
    this.selected = !this.selected;
  }
}