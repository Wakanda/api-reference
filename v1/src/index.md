# Wakanda Server v1 API Reference

## Global Scope

The `application` object available on the global scope represents both the currently running application and the JavaScript context global scope. 
This means that all properties and methods of the `application` object are directly accessible from the global scope and vice versa.

In practice, this implies that the following code snippets are equivalent :

```javascript
var uuid = generateUUID();
```

And

```javascript
var uuid = application.generateUUID();
```

The `application` object implements the [`Application`][Application] interface.




[Application]: ./interfaces/application.html
