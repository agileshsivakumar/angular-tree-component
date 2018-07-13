import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nodes = [
    {
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    }
  ];

  public options = {};

  public menuClicked(tree) {
    console.log(tree.node.data.name);
    switch (tree.node.data.id) {
      case 1:
        break;
      case 2:
        break;
      default:
        break;
    }
  }
}
