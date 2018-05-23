var { LinkedList, Node } = require('../modules/LinkedList');

describe("CreateList", function () {
  it("Should create an object with an array inside", function () {
    var list = new LinkedList();

    expect(list._length).toBe(0);
    expect(list.head).toBe(null);
  });
});


describe("AddToTheBeginning", function () {
  it("should add new node to the beginning", function () {
    var list = new LinkedList();
    var updatedLength = list._length + 1;
    list.AddToTheBeginning('cool');
    expect(list._length).toBe(updatedLength);
  });
  it("should add new node to the beginning", function () {
    var list = new LinkedList();
    list.AddToTheBeginning('cool');
    expect(list.head.data).toBe('cool');
  });
});


describe("DeleteItem", function () {
  it("should find the spesific node and delete it", function () {
    var list = new LinkedList();
    list.AddToTheBeginning('cool');
    list.AddToTheBeginning('hot');
    var updatedLength = list._length - 1;
    list.DeleteItem('hot');
    expect(list._length).toBe(updatedLength);
  });
  it("should find the spesific node and delete it", function () {
    var list = new LinkedList();
    list.AddToTheBeginning('cool');
    list.AddToTheBeginning('hot');
    list.AddToTheBeginning('storm');
    list.AddToTheBeginning('rain');
    list.DeleteItem('hot');
    var current = list.head;
    for (var i = 1; i < 3; i++) {
      current = current.next;
    }
    (expect(current.data).toBe('cool'))
  });
});


describe("AddToTheEnd", function () {
  it("should add new node to the end of the list", function () {
    var list = new LinkedList();
    list.AddToTheBeginning('cool');
    list.AddToTheBeginning('hot');
    var updatedLength = list._length + 1;
    list.AddToTheEnd('sunny');
    expect(list._length).toBe(updatedLength);
  });
  it("should add new node to the end of the list", function () {
    var list = new LinkedList();
    list.AddToTheBeginning('cool');
    list.AddToTheBeginning('hot');
    list.AddToTheEnd('test')
    var currentNode = list.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next
    }
    expect(currentNode.data).toBe('test')
    expect(currentNode.next).toBe(null);
  });
});


describe("RemoveItemByIndex", function () {
  it("should delete node by index", function () {
    var list = new LinkedList();
    list.AddToTheBeginning('cool');
    list.AddToTheBeginning('hot');
    list.AddToTheBeginning('sunny');
    list.AddToTheBeginning('chil');
    list.AddToTheBeginning('dark');
    var updatedLength = list._length - 1;
    list.RemoveItemByIndex(2)
    expect(list._length).toBe(updatedLength);
  });
  // var index = 2;
  // it("should delete node by index", function (index) {
  //   var list = new LinkedList();
  //   list.RemoveItemByIndex(index)
  //   var currentNode = this.head;
  //   currentNode = currentNode.next;
  //   for (var i = 1; i < index; i++) {
  //     currentNode.next = currentNode.next.next;
  //   }
  //   expect(currentNode.next.data).toBe('hot')
  // });
});