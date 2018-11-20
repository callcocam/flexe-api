export class Executation {
    constructor(
        public id:number,
        public project_id:string,
        public percentual:string,
        public data_medicao:string,
        public previsao_conclusao:string,
        public description:string,
        public status:string,
        public created_at:string,
        public updated_at:string 
    ) {}
    
}