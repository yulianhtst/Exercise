(function str() {
    String.prototype.ensureStart = function (str) {
        if (this.slice(0, str.length) == str) {
            return this
        } else {
            return str.concat(this)
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (this.slice(this.length-str.length) == str) {
            return this
        } else {
            return this.concat(str)
        }
     }
    String.prototype.isEmpty = function () { 
        return this.isEmpty()
    }
    String.prototype.truncate = function (n) {
        
     }
    String.prototype.format = function (string, ...params) { }

})()