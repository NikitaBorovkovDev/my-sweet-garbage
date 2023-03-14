class Dictionary {
    #name
    #words
    constructor (name) {
        this.#name = name;
        this.#words = {};
    }
    
    addNewWord(word, desc) {
        this.#words[word] = {
            word: `${word}`,
            desc: `${desc}`,
        }
        console.log('added');
    }

    get mainName() {
        return this.#name
    }

    set setMainName(name) {
        this.#name = name;
    }

    get allWords() {
        return this.#words
    }

    add(word, desc) {
        if (this.#words[word]) {
            return console.log('include')
        }
        this.addNewWord(word, desc)
    }

    remove(word) {
        if (this.#words[word]) {
            delete this.#words[word]
            console.log('del');
        }
    }

    get(word) {
        this.#words[word] ? console.log(this.#words[word].word + ' - ' + this.#words[word].desc) : console.log('nothing')
    }

    showAllWords() {
        for (let key in this.#words) {
            console.log(`${this.#words[key].word} - ${this.#words[key].desc}`);
        }
    }
}

const dictionary = new Dictionary('Толковый словарь');




class HardWordsDictionary extends Dictionary {
    
    constructor(name) {
        super(name);
    }

    add(word, desc) {
        if (this.allWords[word]) {
            return console.log('include')
        }
        this.allWords[word] = {
            word: `${word}`,
            desc: `${desc}`,
            isDifficult: true,

        }
        console.log('added');
    }
}
const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords);
