# how Dom works
- DOM works by creating total html page into the object and that object stored in the window of the browser. 
- From where we can access the elements stored in the document object in window and we can manipulate them.

# How access DOM elements
- document.getElementById();
- document.getElementsByClassName();
- document.getElementsByTagName();

# what is the use of QuerySelector?
- Qs returns the node of the DOM.
- we use it like,
- document.querySelector("p");  -> returns first p.
- document.querySelectorAll("p"); -> returns all nodes available in p.

# properties
- tagName
- innerHtml
- innerText
# attributes
- getAttributes()  -> gets attributes of nodes.
- setAttribute(key,value)  -> we can set new attribute

# styles
- node.style

# insert
- For inserting elements we need to create the the new Element.
- let Element = document.createElement("div or button or p or yourwish").
- we can add it in few ways.
- node.append(Element) -> add new element at the last
- node.prepend(Element) -> add new element at first
- node.before(Element) -> just before the selected eleemnt
- node.after(Element) -> just after

# delete

- node.remove()

