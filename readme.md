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

| Name                                | Value                                                                                                               |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `letters`                           | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ``                                                            |
| `letters:es`                        | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ``                                              |
| `letters:lower`                     | ``abcdefghijklmnopqrstuvwxyz``                                                                                      |
| `letters:lower:es`                  | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyz``                                                                               |
| `letters:upper`                     | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ``                                                                                      |
| `letters:upper:es`                  | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ``                                                                               |
| `numbers`                           | ``0123456789``                                                                                                      |
| `letters:numbers`                   | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789``                                                  |
| `letters:numbers:es`                | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789``                                    |
| `letters:numbers:lower`             | ``abcdefghijklmnopqrstuvwxyz0123456789``                                                                            |
| `letters:numbers:lower:es`          | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyz0123456789``                                                                     |
| `letters:numbers:upper`             | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789``                                                                            |
| `letters:numbers:upper:es`          | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789``                                                                     |
| `specials`                          | ``-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                                             |
| `letters:specials`                  | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                         |
| `letters:specials:es`               | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``           |
| `letters:specials:lower`            | ``abcdefghijklmnopqrstuvwxyz-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                   |
| `letters:specials:lower:es`         | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyz-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                            |
| `letters:specials:upper`            | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                   |
| `letters:specials:upper:es`         | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                            |
| `letters:numbers:specials`          | ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``               |
| `letters:numbers:specials:es`       | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t`` |
| `letters:numbers:specials:upper`    | ``ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                         |
| `letters:numbers:specials:upper:es` | ``AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                  |
| `letters:numbers:specials:lower`    | ``abcdefghijklmnopqrstuvwxyz0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                         |
| `letters:numbers:specials:lower:es` | ``aábcdeéfghiíjklmnñoópqrstuúüvwxyz0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                  |
| `numbers:specials`                  | ``0123456789-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t``                                                                   |


### Use custom charsacters with template

```javascript
const { BruteIterator } = require('brute-iterator');

const iterator = new BruteIterator();
iterator
    .words({ template: 'numbers:specials', characters: 'aeiou' })
    .forEach(word => console.log(word));
```


## Support

This software is free and its source code is totally free for you to use and learn. Support the creator.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=KM2KBE8F982KS)
