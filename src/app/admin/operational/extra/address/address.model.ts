export class Address {
    constructor(
        public id:number,
        public parent:number,
        public assets:string,
        public name:string,
        public alias:string,
        public street:string,
        public district:string,
        public number:number,
        public complements:string,
        public zip:string,
        public city:string,
        public state:string,
        public country:string,
        public longetude:string,
        public latitude:string,
        public status:number,
        public created_at:string,
        public updated_at:string    
    ) {}
    
}