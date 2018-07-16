import { Component } from '@angular/core';
import { TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  options = {
    useCheckbox: true
  };
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

  filterFn(value: string, treeModel: TreeModel) {
    treeModel.filterNodes((node: TreeNode) =>
      this.fuzzysearch(value, node.data.name)
    );
  }

  fuzzysearch(needle: string, haystack: string) {
    const haystackLC = haystack.toLowerCase();
    const needleLC = needle.toLowerCase();

    const hlen = haystack.length;
    const nlen = needleLC.length;

    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return needleLC === haystackLC;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
      const nch = needleLC.charCodeAt(i);

      while (j < hlen) {
        if (haystackLC.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  }

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
