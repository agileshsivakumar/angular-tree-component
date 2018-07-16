import { TreeModuleClass } from './tree.module';

describe('TreeModule', () => {
  let treeModule: TreeModuleClass;

  beforeEach(() => {
    treeModule = new TreeModuleClass();
  });

  it('should create an instance', () => {
    expect(treeModule).toBeTruthy();
  });
});
