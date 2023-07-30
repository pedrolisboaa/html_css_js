class Automovel{
    constructor(rodas, motor){
        this.rodas = rodas
        this.motor = motor
    }

    get getMotor(){
        return thir.motor
    }

    set setMotor(motor){
        this.motor = motor
    }

}


class Moto extends Automovel{
    constructor(rodas, motor, pedal){
       super(rodas, motor)
       this.pedal = pedal 
    }
}


class Carro extends Automovel{
    constructor(rodas, motor, vidros){
        super(rodas, motor)
        this.vidros = vidros
    }
}



let moto = new Moto(2, 50, 2)
let carro = new Carro(4, 90, 6)


console.log(moto)
console.log(carro)

moto.setMotor = 100
carro.setMotor = 300


console.log(moto)
console.log(carro)