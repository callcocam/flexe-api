import {  ColumnSetting } from "./table/table-layout/layout.model";

export class Settings {

	private _title: string
	private _headers: ColumnSetting[]
	private _params: any[]
	private _options: any[]
	private _rows: any[]

	constructor(settings) {
	  
		this.title 		= settings.title
		this.headers 	= settings.headers
		this.params 	= settings.paramsWrap
		this.options 	= settings.options
		this.rows	 	= settings.rows

	}

	get title(): string {

		return this._title

	}

	set title(title: string) {

		this._title = title

	}

	get headers(): ColumnSetting[] {

		return this._headers

	}

	set headers(headers: ColumnSetting[]) {

		this._headers = headers

	}

	get rows():  any[] {

		return this._rows

	}

	set rows(rows: any[]) {

		this._rows = rows

	}

	get options(): any[] {

		return this._options

	}

	set options(options: any[]) {

		this._options = options

	}

	get params(): any[] {

		return this._params

	}

	set params(params: any[]) {

		this._params = params

	}


}
