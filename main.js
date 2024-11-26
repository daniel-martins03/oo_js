class VeiculoPadrao {
    constructor() {
        if (this.constructor === VeiculoPadrao) {
            throw new TypeError("Esta classe não pode ser instanciada diretamente");
        }
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Veiculo extends VeiculoPadrao {
    constructor(tipo, estagioTurbo) {
        super();
        this.turbo = new Turbo(estagioTurbo);
        if (tipo == 1) {
            this.velocidadeMax = 150;
            this.nome = "normal";
        } else if (tipo == 2) {
            this.velocidadeMax = 200;
            this.nome = "sport";
        } else if (tipo == 3) {
            this.velocidadeMax = 250;
            this.nome = "van";
        }
        this.velocidadeMax += this.turbo.pot;
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Velocidade Máxima: ${this.velocidadeMax}`);
        console.log(`Turbo: ${this.turbo.pot}`);
        console.log(`Rodas: ${this.rodas}`);
        console.log(`Portas: ${this.portas}`);
        console.log(`Ligado: ${this.ligado}`);
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0;
        } else if (e == 1) {
            this.pot = 50;
        } else if (e == 2) {
            this.pot = 75;
        } else if (e == 3) {
            this.pot = 100;
        }
    }
}

class VeiculoEspecial extends VeiculoPadrao {
    constructor(estagioTurbo) {
        super();
        this.turbo = new Turbo(estagioTurbo);
        this.velocidadeMax = 300 + this.turbo.pot;
        this.nome = "Veiculo Especial";
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Velocidade Máxima: ${this.velocidadeMax}`);
        console.log(`Turbo: ${this.turbo.pot}`);
        console.log(`Rodas: ${this.rodas}`);
        console.log(`Portas: ${this.portas}`);
        console.log(`Ligado: ${this.ligado}`);
        console.log("----------------");
    }
}

// Instâncias de Veiculo e VeiculoEspecial
const veiculo1 = new Veiculo(1, 0); // Veículo normal sem turbo
const veiculo2 = new Veiculo(2, 1); // Veículo sport com turbo nível 1
const veiculoEspecial = new VeiculoEspecial(3); // Veículo especial com turbo nível 3

veiculo1.info();
veiculo2.info();
veiculoEspecial.info();

// Tentativa de instanciar VeiculoPadrao gera erro
// const veiculoPadrao = new VeiculoPadrao(); // Gera erro