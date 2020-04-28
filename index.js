class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return (this.radius * 2)
    }

    get circumference() {
        return (Math.PI * this.diameter)
    }

    get area() {
        return (Math.PI * (Math.pow(this.radius, 2)))
    }

    set diameter(di) {
        this.radius = (di/2)
    }

    set circumference(circum) {
        this.radius = ((circum/Math.PI)/2)
    }

}