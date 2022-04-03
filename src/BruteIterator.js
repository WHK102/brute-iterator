const BruteIteratorWords = require('./BruteIteratorWords');

class BruteIterator {

    templates;

    constructor() {
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const lower_es = 'aábcdeéfghiíjklmnñoópqrstuúvwxyz';
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const upper_es = 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ';
        const numbers = '0123456789';
        const specials = '-_.:,;\\/=()&\'"?¿!¡+*@#$%[]{}^` \t';

        this.templates = {
            'letters': `${lower}${upper}`,
            'letters:es': `${lower_es}${upper_es}`,
            'letters:lower': `${lower}`,
            'letters:lower:es': `${lower_es}`,
            'letters:upper': `${upper}`,
            'letters:upper:es': `${upper_es}`,
            'numbers': `${numbers}`,
            'letters:numbers': `${lower}${upper}${numbers}`,
            'letters:numbers:es': `${lower_es}${upper_es}${numbers}`,
            'letters:numbers:lower': `${lower}${numbers}`,
            'letters:numbers:lower:es': `${lower_es}${numbers}`,
            'letters:numbers:upper': `${upper}${numbers}`,
            'letters:numbers:upper:es': `${upper_es}${numbers}`,
            'specials': `${specials}`,
            'letters:specials': `${lower}${upper}${specials}`,
            'letters:specials:es': `${lower_es}${upper_es}${specials}`,
            'letters:specials:lower': `${lower}${specials}`,
            'letters:specials:lower:es': `${lower_es}${specials}`,
            'letters:specials:upper': `${upper}${specials}`,
            'letters:specials:upper:es': `${upper_es}${specials}`,
            'letters:numbers:specials': `${lower}${upper}${numbers}${specials}`,
            'letters:numbers:specials:es': `${lower_es}${upper_es}${numbers}${specials}`,
            'letters:numbers:specials:upper': `${upper}${numbers}${specials}`,
            'letters:numbers:specials:upper:es': `${upper_es}${numbers}${specials}`,
            'letters:numbers:specials:lower': `${lower}${numbers}${specials}`,
            'letters:numbers:specials:lower:es': `${lower_es}${numbers}${specials}`,
            'numbers:specials': `${numbers}${specials}`,
            // 'ports': [ 1 ... 65535 ],
        };
    }

    words(opts) {
        // Merge options
        opts = Object.assign({}, {
            length     : 4,
            template   : null,
            characters : null
        }, opts);

        // Define words
        let characters = '';

        if(opts.template) {
            if(Object.keys(this.templates).includes(opts.template))
                characters += this.templates[opts.template];
            else
                throw new Error(`Template is not found: ${opts.template}`);
        }

        if(opts.characters)
            characters += opts.characters.toString();

        if(!characters)
            throw new Error(`Characters or template are required.`);

        return new BruteIteratorWords({
            length: parseInt(opts.length),
            characters: characters
        });
    }
}

module.exports = BruteIterator;
