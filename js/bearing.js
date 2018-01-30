class Bearing {
    constructor(rad) {
        this.setRadians(rad);
    }

    setRadians(rad) {
        this.rad = (rad + Bearing.MAX) % Bearing.MAX;
        return this;
    }

    getRadians() {
        return this.rad;
    }

    setDegrees(degrees) {
        this.rad = degrees * (Math.PI / 180);
        return this;
    }

    getDegrees() {
        return this.getRadians() * (180 / Math.PI);
    }

    addRadians(radToAdd) {
        this.setRadians(this.rad + radToAdd);
        return this;
    }

    addDegrees(degreeToAdd) {
        let radToAdd = degreeToAdd * (Math.PI / 180);
        this.addRadians(radToAdd);
        return this;
    }
}

Bearing.MAX = Math.PI * 2;
