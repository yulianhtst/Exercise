function factory(order) {
    function getEngine({ power }) {
        if (90 >= power) {
            return {
                power:90,
                volume: 1800
            }
        } else if (power <= 120) {
            return {
                power:120,
                volume: 2400
            }
        } else {
            return {
                power:200,
                volume: 3500
            }
        }
    }
    function getCarriage({ carriage, color }) {
        return {
            type: carriage,
            color
        }
    }
    function getWheels({ wheelsize }) {
        if (wheelsize % 2 === 0) {
            return [wheelsize - 1, wheelsize - 1, wheelsize - 1, wheelsize - 1]
        } else {
            return [wheelsize, wheelsize, wheelsize, wheelsize]
        }
    }

    return{
        model: order.model,
        engine: getEngine(order),
        carriage: getCarriage(order),
        wheels: getWheels(order),
    }
}
factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})
