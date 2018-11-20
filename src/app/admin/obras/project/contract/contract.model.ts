export class Contract {
    constructor(
        public id:number,
        public project_id:string,
        public convenio:string,
        public convenio_siafi:string,
        public proposta:string,
        public programa:string,
        public vigencia:string,
        public contratacao:string,
        public publicacao:string,
        public investimento:string,
        public repasse:string,
        public contrapartida:string,
        public description:string,
        public status:string,
        public created_at:string,
        public updated_at:string 
    ) {}
    
}