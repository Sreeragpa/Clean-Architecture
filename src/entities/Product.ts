export class Product{
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly price: number,
        public readonly stock: number,
        public readonly id?: number
    ){
        if (!name || name.trim() === '') {
            throw new Error('Product name is required.');
        }

        if (!description || description.trim() === '') {
            throw new Error('Product description is required.');
        }

        if (isNaN(price) || price <= 0) {
            throw new Error('Product price must be a positive number.');
        }

        if (isNaN(stock) || stock < 0) {
            throw new Error('Product stock must be a non-negative number.');
        }

        if (id && isNaN(id) || id && id <= 0) {
            throw new Error('Product ID must be a positive number.');
        }
    }
}