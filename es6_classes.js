class Book {
    constructor (title, price, pages) {
        // this - current object
        this.title = title;
        this.price = price; // will proxy to set price ()
        this.pages = pages;
    }

    get price() {
        // this - current object
        return `$${this.__price}`;
    }

    set price(price) {
        this.__price = price;
    }

    getDetails() {
        // this - current object
        /* return 'Title: ' + this.title + '\nPrice: ' + this.price
            + '\nPages: ' + this.pages; */
        return `Title: ${this.title}\nPrice: ${this.price}\nPages: ${this.pages}`;
        // will proxy to get price()
    }
}

const b1 = new Book('Book 1', 900, 5000);
const b2 = new Book('Book 2', 800, 450);

/* console.log(b1);
console.log(typeof b1);

console.log(b2);
console.log(typeof b2); */
console.log(b1.getDetails());
// Book.getDetails(b1)

console.log(b2.getDetails());
// Book.getDetails(b2)

console.log(b1.price); // get price()
