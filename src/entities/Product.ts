export interface IProduct {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly id?: number;
}


// export class Product{
//     constructor(
//         public readonly name: string,
//         public readonly description: string,
//         public readonly price: number,
//         public readonly stock: number,
//         public readonly id?: number
//     ){}

//     validate(){
//         if (!this.name || this.name.trim() === '') {
//             throw new Error('Product name is required.');
//         }

//         if (!this.description || this.description.trim() === '') {
//             throw new Error('Product description is required.');
//         }

//         if (isNaN(this.price) || this.price <= 0) {
//             throw new Error('Product price must be a positive number.');
//         }

//         if (isNaN(this.stock) || this.stock < 0) {
//             throw new Error('Product stock must be a non-negative number.');
//         }

//         if (this.id && isNaN(this.id) || this.id && this.id <= 0) {
//             throw new Error('Product ID must be a positive number.');
//         }
//     }
// }