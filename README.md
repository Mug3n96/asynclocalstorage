# AsyncLocalStorage
### DESCRIPTION:
```
This is a lightweight promised based async wrapper for localStorage.
```
### INSTALLATION:
```
npm i @mug3n96/asynclocalstorage --save
```
### USE:
#### require module
```javascript
const asyncLocalStorage = require('@mug3n96/asynclocalstorage');
```

#### set item
```javascript
// you can pass a none stringified object, the methode will stringify it automatically
// (there is no Promise rejection )
```
```javascript
asyncLocalStorage.setItem('key', {test: 'test'})
  .then(value => console.log(value));
```
#### get item
```javascript
// if there is no saved item, promise will reject
```
```javascript
asyncLocalStorage.getItem('key')
  .then(value => console.log(value))
  .catch(e => console.log('CANNOT GET THE ITEM'));
```

#### remove item
```javascript
// if there is no item with the key 'key' promise will
// reject
```
```javascript
asyncLocalStorage.removeItem('key')
  .then(data => console.log(data.value, 'of', data.key, 'has been removed'))
  .catch(e => console.log(e));
```
#### clear
```javascript
// will clear all items of your local storage
```
```javascript
asyncLocalStorage.clear()
  .then(() => {
    console.log('do maybe smth after you cleared all items');
  });
```