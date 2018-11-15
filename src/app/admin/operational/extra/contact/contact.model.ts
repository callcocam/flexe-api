export class Contact {
    constructor(
        public id: number,
        public name: string,
        public icone: string,
        public value: string,
        public created_at: string,
        public updated_at: string,
        public parent: number,
        public assets: string = 'users',       
        public status: number = 1      
    ) {}
    
}