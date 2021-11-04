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

To add a sjhv to a node, simply add the `data-sjhv` attribute to the node.
In it, you will have to give this node a ID for sjhv.

#### Example of an ID for a div:

```html
<div data-sjhv="sjhvDivID"></div>
```

### Once a node has an ID, you can bind values to it.

```html
<script>
    
    let domModel = new SJHV(); //Initialize a new SJHV Data Model. Once, SJHV can be used more than once.

    domModel.setNestedValue("someProperty", ""); //Add a new property to the value-database in the SJHV called someProperty with the value ""

    domModel.setNestedBound("sjhvDivID.textContent", domModel.boundVar("someProperty")) //Bind the property of the value-database with the node's textContent
    
</script>
```


### Updating HTML

In order to update the HTML you will need to evoke one of those functions:

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

    <input type="text" oninput=setText(this) value="">
    <div data-sjhv='sjhvDivID'></div>

</body>

<script>

    let domModel = new SJHV(); //Initialize a new SJHV Data Model. Once, SJHV can be used more than once.

    domModel.setNestedValue("someProperty", ""); //Add a new property to the value-database in the SJHV called someProperty with the value ""

    domModel.setNestedBound("sjhvDivID.textContent", domModel.boundVar("someProperty")) //Bind the property of the value-database with the node's textContent

    function setText(e) {
        domModel.setNestedValue("someProperty", e.value);
        domModel.updateHTML();
    }

</script>
```

In this example, the value of the text input will be displayed beneath it.
