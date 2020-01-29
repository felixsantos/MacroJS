var ToolFloat = (function () {
    function ToolFloat() {
        this._dirRoot = "components/toolFloat";
        this.Component();
    }
    ToolFloat.prototype.Component = function () {
        $.get(this._dirRoot + "/toolFloat.html", function (data) {
            $('body').append(data);
        });
        $.get(this._dirRoot + "/toolFloat.css", function (data) {
            $('body').append(data);
        });
    };
    return ToolFloat;
}());
var Views = (function () {
    function Views() {
        this.initialize();
    }
    Views.prototype.initialize = function () {
        var toolFloat = new ToolFloat();
    };
    return Views;
}());
var app = new Views();
//# sourceMappingURL=app.js.map