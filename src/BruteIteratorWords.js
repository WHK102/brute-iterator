const StopIteration = require('./StopIteration');

class BruteIteratorWords {

    #stack;
    #currentIndexStack;
    opts;

    constructor(opts) {

        // Merge options
        this.opts = Object.assign({}, {
            length     : 4,
            characters : 'abcdefghijklmnopqrstuvwxyz'
        }, opts);

        if(!parseInt(this.opts.length) > 0)
            throw new Error(`Valid length is required.`);

        // Stack of indexes of characters
        this.#stack = [ ];
        this.#currentIndexStack = 0;
    }

    forEach(callback) {
        // Initial values
        this.#stack = Array(this.opts.length).fill(null);
        this.#currentIndexStack = 0;

        // Stats
        // const totalWords = Math.pow(this.opts.characters.length, this.opts.length);
        let currentWordIndex = 0;
        let value = null;

        while(true) {
            try{
                value = this.next();
            } catch(e) {
                if(e.constructor.name === 'StopIteration')
                    break;
                throw e;
            }
            callback(value, ++currentWordIndex); //, totalWords);
        }
    }

    next() {
        if((!this.opts.characters) || (!this.#stack.length))
            throw new StopIteration();

        if((this.#stack.length - 1) < this.#currentIndexStack)
            // First value
            this.#stack[this.#currentIndexStack] = 0;

        else
            // Next value
            this.#stack[this.#currentIndexStack] += 1;

        // Overflow?
        if(this.#stack[this.#currentIndexStack] > (this.opts.characters.length - 1)){

            // Reset counter
            this.#stack[this.#currentIndexStack] = 0;

            // Sum previous index
            let prevIndex = this.#currentIndexStack - 1;
            while(true){

                // No more previous index?, need append a unity
                if(prevIndex < 0){

                    // Next index
                    this.#currentIndexStack += 1;

                    if(this.#currentIndexStack > (this.#stack.length - 1))
                        // No more indexes on stack
                        throw new StopIteration();

                    // First value of next stack
                    this.#stack[this.#currentIndexStack] = 0;

                    break;

                } else {
                    // Next value of previous index
                    this.#stack[prevIndex] += 1;

                    // Overflow?
                    if(this.#stack[prevIndex] > (this.opts.characters.length - 1)){

                        this.#stack[prevIndex] = 0;

                        // Try next with previous index
                        prevIndex -= 1;

                    } else {
                        // Normal operation
                        break;
                    }
                }
            }
        }

        // Make the final string
        let characters = ''
        for(let indexStack = 0; indexStack <= this.#stack.length - 1; indexStack++) {

            // Check for empty right padding
            if(this.#stack[indexStack] == null)
                continue;

            characters += this.opts.characters[this.#stack[indexStack]];
        }

        return characters;
    }
}

module.exports = BruteIteratorWords;
