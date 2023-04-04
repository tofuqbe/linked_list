// const Node = require("./list").Node;
const LinkedList = require("./list");

test("Test whether head and tail nodes are correctly written with append and prepend methods.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.prepend(430);
  list.prepend(2220);

  expect(list.head.value).toEqual(2220);
  expect(list.tail.value).toEqual(667);
});

test("Test if atIndex method returns the correct node value from list.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.append(2220);

  expect(list.atIndex(2)).toEqual(430);
  expect(list.atIndex(0)).toEqual(5);
  // Edge cases
  expect(list.atIndex(-1)).toEqual(null);
  expect(list.atIndex(4)).toEqual(null);
});

test("Check whether pop method correctly removes and updates tail and length property.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.append(2220);
  list.pop();
  list.pop();

  expect(list.atIndex(3)).toEqual(null);
  expect(list.tail.value).toEqual(667);
  expect(list.size).toEqual(2);
});

test("Check whether contains method returns correct boolean.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.prepend(1001);

  expect(list.contains(1001)).toEqual(true);
  expect(list.contains(430)).toEqual(true);
  expect(list.contains("steve")).toEqual(false);
});

test("Check whether find methods returns the correct index of a given value.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.prepend(1001);

  expect(list.find(430)).toEqual(3);
  expect(list.find(123)).toEqual(null);
  expect(list.find(5)).toEqual(1);
  expect(list.find(1001)).toEqual(0);
});

test("Check whether toString methods output is correctly formatted", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.prepend(1001);

  expect(list.toString()).toEqual(
    "( 1001 ) -> ( 5 ) -> ( 667 ) -> ( 430 ) -> null"
  );
});

test("Check whether insertAt method corretly inserts at index and increments length and updates head or tail if relevant.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.prepend(1001);
  list.insertAt("Fred", 2);

  expect(list.atIndex(2)).toEqual("Fred");

  list.insertAt("Mike", 0);
  expect(list.head.value).toEqual("Mike");
  expect(list.atIndex(0)).toEqual("Mike");
  expect(list.atIndex(2)).toEqual(5);
  expect(list.atIndex(3)).toEqual("Fred");

  list.insertAt("Reyna", 5);

  expect(list.atIndex(5)).toEqual("Reyna");
  expect(list.atIndex(6)).toEqual(430);
  expect(list.tail.value).toEqual(430);
  expect(list.size).toEqual(7);

  // If index is outside of list returns null
  expect(list.insertAt("Maria", 7)).toEqual(null);
});

test("Check whether removeAt methods correctly updates node structure after removing a node.", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(667);
  list.append(430);
  list.prepend(1001);
  list.prepend("Martin");
  list.prepend("Lewis");

  list.removeAt(0);
  expect(list.head.value).toEqual("Martin");
  expect(list.atIndex(0)).toEqual("Martin");

  list.removeAt(4);
  expect(list.tail.value).toEqual(667);
  expect(list.atIndex(3)).toEqual(667);
  expect(list.size).toEqual(4);

  list.removeAt(1);
  expect(list.atIndex(0)).toEqual("Martin");
  expect(list.atIndex(1)).toEqual(5);
  expect(list.atIndex(2)).toEqual(667);
});
