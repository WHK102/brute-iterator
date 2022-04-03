# Brute Iterator module for NodeJS

## Installation

```bash
npm install brute-iterator
```

## How to use

### Simple iteration

```javascript
const { BruteIterator } = require('brute-iterator');

const iterator = new BruteIterator();
iterator
    .words({ template: 'letters' })
    .forEach((word, index) => console.log(`Word ${index}: ${word}`));
```

Result:

```
Word 1: a
Word 2: b
Word 3: c
Word 4: d
...
Word 7454976: ZZZW
Word 7454977: ZZZX
Word 7454978: ZZZY
Word 7454979: ZZZZ
```

### Use custom chars

```javascript
const { BruteIterator } = require('brute-iterator');

const iterator = new BruteIterator();
iterator.words({ characters: 'aeiou' }).forEach(word => console.log(word));
```

Result:

```
...
uuue
uuui
uuuo
uuuu
```

## Templates

| Name                                | Value                                                                                                             |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `letters`                           | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ``                                                          |
| `letters:es`                        | ``aábcdeéfghiíjklmnñoópqrstuúvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ``                                              |
| `letters:lower`                     | ``abcdefghijklmnopqrstuvwxyz``                                                                                    |
| `letters:lower:es`                  | ``aábcdeéfghiíjklmnñoópqrstuúvwxyz``                                                                              |
| `letters:upper`                     | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ``                                                                                    |
| `letters:upper:es`                  | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ``                                                                              |
| `numbers`                           | ``0123456789``                                                                                                    |
| `letters:numbers`                   | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789``                                                |
| `letters:numbers:es`                | ``aábcdeéfghiíjklmnñoópqrstuúvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ0123456789``                                    |
| `letters:numbers:lower`             | ``abcdefghijklmnopqrstuvwxyz0123456789``                                                                          |
| `letters:numbers:lower:es`          | ``aábcdeéfghiíjklmnñoópqrstuúvwxyz0123456789``                                                                    |
| `letters:numbers:upper`             | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789``                                                                          |
| `letters:numbers:upper:es`          | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ0123456789``                                                                    |
| `specials`                          | ``-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                                           |
| `letters:specials`                  | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                       |
| `letters:specials:es`               | ``aábcdeéfghiíjklmnñoópqrstuúvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``           |
| `letters:specials:lower`            | ``abcdefghijklmnopqrstuvwxyz-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                 |
| `letters:specials:lower:es`         | ``aábcdeéfghiíjklmnñoópqrstuúvwxyz-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                           |
| `letters:specials:upper`            | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                 |
| `letters:specials:upper:es`         | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                           |
| `letters:numbers:specials`          | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``             |
| `letters:numbers:specials:es`       | ``aábcdeéfghiíjklmnñoópqrstuúvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t`` |
| `letters:numbers:specials:upper`    | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                       |
| `letters:numbers:specials:upper:es` | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                 |
| `letters:numbers:specials:lower`    | ``abcdefghijklmnopqrstuvwxyz0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                       |
| `letters:numbers:specials:lower:es` | ``aábcdeéfghiíjklmnñoópqrstuúvwxyz0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                 |
| `numbers:specials`                  | ``0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                                    |


### Use custom charsacters with template

```javascript
const { BruteIterator } = require('brute-iterator');

const iterator = new BruteIterator();
iterator
    .words({ template: 'numbers:specials', characters: 'aeiou' })
    .forEach(word => console.log(word));
```
