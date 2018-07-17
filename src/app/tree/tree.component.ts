import { Component } from '@angular/core';
import { TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  options = {};
  nodes = [
    {
      name: 'North America',
      children: [
        {
          name: 'United States',
          children: [
            { name: 'New York' },
            { name: 'California' },
            { name: 'Florida' }
          ]
        },
        { name: 'Canada' }
      ]
    },
    {
      name: 'South America',
      children: [{ name: 'Argentina', children: [] }, { name: 'Brazil' }]
    },
    {
      name: 'Europe',
      children: [
        { name: 'England' },
        { name: 'Germany' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Spain' }
      ]
    }
  ];

  public nodeClicked(tree) {
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
