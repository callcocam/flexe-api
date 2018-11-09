export class FilterSerach {

    public _status: string = ''
    public _start: string = ''
    public _end: string = ''
    public _column: string = 'id'
    public _order: string = 'DESC'
    public _limit: string = '1000'
    public _page: string = '1'
    public _search: string = ''
    public _between: string = ''
    public _number: string = '1'

    constructor(settings) {

        this.status = settings.status
        this.start = settings.start
        this.end = settings.end
        this.column = settings.column
        this.order = settings.order
        this.limit = settings.limit
        this.page = settings.page
        this.search = settings.search
        this.between = settings.between
        this.number = settings.number

    }

    set status(status: string) {

        this._status = status
    }

    get status(): string {

        return this._status

    }


    set start(start: string) {

        this._start = start
    }

    get start(): string {

        return this._start

    }


    set end(end: string) {

        this._end = end
    }

    get end(): string {

        return this._end

    }


    set column(column: string) {

        this._column = column
    }

    get column(): string {

        return this._column

    }



    set order(order: string) {

        this._order = order
    }

    get order(): string {

        return this._order

    }


    set limit(limit: string) {

        this._limit = limit
    }

    get limit(): string {

        return this._limit

    }


    set page(page: string) {

        this._page = page
    }

    get page(): string {

        return this._page

    }


    set search(search: string) {

        this._search = search
    }

    get search(): string {

        return this._search

    }


    set between(between: string) {

        this._between = between
    }

    get between(): string {

        return this._between

    }


    set number(number: string) {

        this._number = number
    }

    get number(): string {

        return this._number

    }

}