export class ColumnSetting {
	name: string
	title: string
	width?: string = "100"
    format?: string;
    classe?: string = '';
    index?: string = '';
    order?: boolean = false;
    alias?: boolean = false;
    sortable?: boolean = false;
    icone?: string = '';
}
export class ColumnMap {
    name: string;
    private _title: string;
    private _format: string;
    private _width: string;
    private _classe: string;
    private _icone: string;
    private _index: string;
    private _order: boolean;
    private _alias: boolean;
    private _sortable: boolean;
	
	constructor ( settings ) {
		
        this.name = settings.name;
        this.title = settings.title;
        this.width = settings.width;
        this.format = settings.format;
        this.classe = settings.classe;
        this.icone = settings.icone;
        this.index = settings.index;
        this.order = settings.order;
        this.alias = settings.alias;
        this.sortable = settings.sortable;
    }
	
    set title(setting: string) {
		
        this._title = setting ? setting : this.name.slice(0, 1).toUpperCase() + this.name.replace(/_/g, ' ' ).slice(1)
		
    }
	
    get title() {
		
        return this._title;
		
    }
	
    set format(setting: string) {
		
        this._format = setting ? setting : 'default';
		
    }
	
    get format() {
		
        return this._format;
		
    }

    set width(setting: string) {
		
        this._width = setting ? setting : '100';
		
    }
	
    get width() {
		
        return this._width;
		
    }

    set classe(setting: string) {
        
        this._classe = setting ? setting : '';
        
    }
    
    get classe() {
        
        return this._classe;
        
    }

    set icone(setting: string) {
        
        this._icone = setting ? setting : '';
        
    }
    
    get icone() {
        
        return this._icone;
        
    }

    set index(index: string) {
        
        this._index = index;
        
    }
    
    get index() {
        
        return this._index;
        
    }
	

    set order(order: boolean) {
        
        this._order = order;
        
    }
    
    get order() {
        
        return this._order;
        
    }
	

    set alias(alias: boolean) {
        
        this._alias = alias;
        
    }
    
    get alias() {
        
        return this._alias;
        
    }
	

    set sortable(sortable: boolean) {
        
        this._sortable = sortable;
        
    }
    
    get sortable() {
        
        return this._sortable;
        
    }
	
    access = function ( object: any ) {
		
        if (object[this.name] || !this.alternativeKeys) {
			
            return this.name;
			
        }
        for (let key of this.alternativeKeys) {
			
            if (object[key]) {
				
                return key;
				
            }
			
        }
        return this.name;
    }
}