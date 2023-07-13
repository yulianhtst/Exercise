function extensibleObject() {
    const returnedObj = {
        extend(template) {
            let prototype  = Object.getPrototypeOf(returnedObj)
            Object.assign( prototype ,template)
        }
    }

    return returnedObj
}

const myObj = extensibleObject()
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
