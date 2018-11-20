export class Conclusion {
    constructor(
        public id:number,
        public project_id:string,
        public description:string,
        public status:number,
        public created_at:string,
        public updated_at:string, 
        public images:any
    ) {}
    
}