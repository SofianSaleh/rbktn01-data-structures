describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains","removeFromParent", "traverse" and a property named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have a parent ', function() {
    tree.addChild(5);
    tree.addChild(3);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    expect(tree.children[1].children[0].parent.value).to.equal(3);
    expect(tree.children[1].parent.value).to.equal(null);
    expect(tree.parent).to.equal(null);
  })

  it('should removeFromParent disassociate a node from its parent', function() {
    tree.addChild(5);
    tree.addChild(3);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    var child = tree.children[0].children[0]
    child.removeFromParent();
    expect(tree.contains(7)).to.equal(false);
    expect(child.parent).to.equal(null);

  })
  it('should traverse through the tree and excute the callback to modify each value' , function(){
    tree.addChild(5);
    tree.addChild(3);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(function(value){
      return value + 7
    });
    expect(tree.children[0].value).to.equal(12)
  })

});
