class Car {
    fn = () => console.log(this)
    speedUp() {
        console.log(this)
    }
}
const cr = new Car()
cr.speedUp() // car
cr.fn() // car