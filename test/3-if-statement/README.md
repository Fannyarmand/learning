# If else programming exercises

> As a programmer you must have a good control on program execution flow. 

if...else is a branching statement. It is used to take an action based on some condition. 
For example - if user inputs valid account number and pin, then allow money withdrawal.

If statement works like "If condition is met, then execute the task". It is used to 
compare things and take some action based on the comparison. Relational and logical
operators supports this comparison.

A condition is anything that return a boolean. For example :

```javascript
`true` is a condition that always return `true`
`false` is a condition that always return `false`
`a > b` is a condition that return true if `a` is superior than `b` and otherwise will return false
etc.
```

The following operator will always return `true` or `false` :

| operator   | description                       | example              | result  |
|------------|-----------------------------------|----------------------|---------|
| `&&`       | and                               | `(x < 10 && y > 1)`  | `true`  |
| `||`       | or                                | `(x == 5 || y == 5)` | `false` |
| `!`        | not                               | `!(x == y)`          | `true`  |
| `==`       | equal to                          | `x == 8`             | `false` |	
| `===`      | equal value and equal type        | `x === 5`            | `true`  |	
| `!=`       | not equal                         | `x != 8`             | `true`  |	
| `!==`      | not equal value or not equal type | `x !== 5`            | `false` |	
| `>`        | greater than                      | `x > 8`              | `false` |
| `<`        | less than                         | `x < 8`              | `true`  |	
| `>=`       | greater than or equal to          | `x >= 8`             | `false` |	
| `<=`       | less than or equal to             | `x <= 8`             | `true`  |

JavaScript language supports three variants of if statement:
- Simple if
- Nested statement
- if...else
- if...elseif
- if...elseif...else
- ternary

## Simple if statement

```javascript
if (condition) {
    // then execute this code
}
```

## Nested statement

Any statement can be nested. It's the same for the if statement, etc.

For example :
```javascript
if (condition) {
    // then execute this code

    if (anotherCondition) {
        // the execute this code
    }

    // this code will also be executed
}
```

## If...else statement

```javascript
if (condition) {
    // then execute this code
} else {
    // else execute this code
}
```

## if...elseif statement

```javascript
if (condition) {
    // then execute this code
} elseif (condition) {
    // else if execute this code
}
```

## if...elseif...else

```javascript
if (condition) {
    // then execute this code
} elseif (condition) {
    // else if execute this code
} else {
    // else execute this code
}
```

## ternary

```javascript

const a = (condition) ? /** return this */ : /** else */;

```
