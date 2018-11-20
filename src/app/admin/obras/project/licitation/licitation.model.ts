export class Licitation {
    constructor(
        public id:number,
        public project_id:string,
        public number_processo:string,
        public modalidade:string,
        public company:string,
        public document:string,
        public description:string,
        public status:string,
        public created_at:string,
        public updated_at:string 
    ) {}
    
}