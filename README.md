# WTA

## RSS feed parser

## Array map

```javascript
Array.prototype.mapClone = function (fn) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i]))
  }
  return newArray
}
```

## Array filter

```javascript
Array.prototype.filterClone = function (fn) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      newArray.push(this[i])
    }
  }
  return newArray
}
```

## Array reduce

```javascript
Array.prototype.reduceClone = function (fn, initialValue) {
  if (initialValue) {
    let sum = initialValue
    for (let i = 0; i < this.length; i++) {
      sum = fn(sum, this[i])
    }
    return sum
  } else {
    let sum = this[0]
    for (let i = 1; i < this.length; i++) {
      sum = fn(sum, this[i])
    }
    return sum
  }
}
```
