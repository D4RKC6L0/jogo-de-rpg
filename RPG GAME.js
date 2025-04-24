
class Personagem {
    constructor(nome, vida, forca, mana) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.mana = mana;
    }
}

class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 150, 30, 5);
    }
}


class Mago extends Personagem {
    constructor(nome) {
        super(nome, 80, 10, 100);
    }
}


class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 100, 20, 30);
    }
}


const guerreiro = new Guerreiro("Ragnar");
const mago = new Mago("Merlin");
const arqueiro = new Arqueiro("Legolas");