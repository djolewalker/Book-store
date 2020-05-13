export class CartItem {
    bookIsbn: string;
    count: number;
    
    constructor(bookIsbn: string, count: number) {
        this.bookIsbn = bookIsbn;
        this.count = count;
    }
}
