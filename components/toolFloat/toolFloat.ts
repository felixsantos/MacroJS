 class ToolFloat {
    private _dirRoot ="components/toolFloat"

    constructor() {
        this.Component();

    }
    private Component(){
         $.get( `${this._dirRoot}/toolFloat.html`, function( data ) {
             $('body').append(data);
          });
          $.get( `${this._dirRoot}/toolFloat.css`, function( data ) {
            $('body').append(data);
         });
    }


}