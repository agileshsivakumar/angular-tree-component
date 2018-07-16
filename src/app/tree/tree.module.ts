import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [CommonModule, TreeModule],
  declarations: [TreeComponent],
  exports: [TreeComponent]
})
export class TreeModuleClass {}
