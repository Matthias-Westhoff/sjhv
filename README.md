# sjhv
## sjhv stands for Small JavaScript HTML Values

And that's what it is!
sjhv is meant to simplify the process of updating values of HTML Nodes.

## Using sjhv

### Include the script in your html file header

```html
<script src="path/to/sjhv.min.js"></script>
```

### Adding a sjhv (simple JavaScript HTML value) to a HTML Node

To add a sjhv to a node, simply add the `data-sjhv`attribute to the node.
In it, you can write a string of JavaScript.
The HTML node is referenced by e.

#### Example of updating the text of a div:

```html
<div data-sjhv="e.textContent=foo"></div>

<script>

foo = "SomeText";

sjhv.updateHTML();

</script>
```

Of course, you can much more than updating just the text of a div.
For example, you can change the styling of e data-sjhv="e.style.someStyle = someStyleValue".

### Updating HTML

In order to apply changes made to variables that are used by sjhv s you can call the following functions:

```js
sjhv.updateHTML();        //Updates the whole document
```

```js
sjhv.updateChildren(n);   //Updates the Node and all of its children 
```

```js
sjhv.updateAll(n);        //Updates every Node in the Nodelist n
```

```js
sjhv.updateOnly(n);       //Updates only n
```


## Example

```html
<body>

    <div>
        <div data-sjhv="e.textContent = someObject.currentValue"></div>
        <input type="range" value=1 data-sjhv="e.max = someObject.maxValue;" onChange=setCurrentValue(this)>
        <input type="text" data-sjhv="e.value = someObject.maxValue" onChange=setMaxValue(this) value="1">
    </div>

</body>

<script>
    var someObject = {
        currentValue: 1,
        maxValue: 100,
    }

    function setMaxValue(element) {
        someObject.maxValue = element.value;
        sjhv.updateHTML();
    }

    function setCurrentValue(element) {
        someObject.currentValue = element.value;
        sjhv.updateHTML();
    }

    document.onload = sjhv.updateHTML();

</script>
```

In this example, the range input value will be displayed inside a div when moving the range input.
Additionally, you can set the range input max value by setting the text inside the text field next to the range input.
