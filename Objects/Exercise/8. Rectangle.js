function rectangle(width, height, color) {


    return {
        width,
        height,
        color:color.charAt(0).toUpperCase()+color.slice(1),
        calcArea() {
            return Number(this.width) * Number(this.height)
        }
    }

}
let rect = rectangle(4, 5, 'red');
console.log(rect);