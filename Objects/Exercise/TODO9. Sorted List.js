function createSortedList() {
    let index = 0;
    let collection = {
        [index]: null,
    }
    let deleteCount=0
    let size = Object.values(collection).length-deleteCount


    function add(element) {
        collection[index] = element
        index++
    }
    function remove(index) {
        if (index > size || index < size) {
            throw new Error('Error')
        } else {
            delete collection[index]
            index--
            deleteCount++
        }
    }
    function get(index) {
        if (index > size || index < size) {
            throw new Error('Error')
        } else {
            if (collection[index] == undefined) {
                let tempIndex = index;
                while (collection[tempIndex] == undefined) {
                    tempIndex++
                }
                return collection[tempIndex]
            } else {
                return collection[index]
            }
        }
    }

    return {
        add,
        remove,
        get,
        size
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(12);
list.add(623);
list.add(4);
list.add(69);
list.add(66);
list.add(546);
console.log(list.get(1));

console.log(list.get(1)); 
console.log(list.size);