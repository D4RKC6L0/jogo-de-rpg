
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

    atacar() {
        return `${this.nome} ataca com espada`;
    }

    defender() {
        return `${this.nome} levanta seu escudo para se defender`;
    }
}


class Mago extends Personagem {
    constructor(nome) {
        super(nome, 80, 10, 100);
    }

    usarMagia() {
        return `${this.nome} conjura uma magia`;
    }

    defender() {
        return `${this.nome} se protege com um escudo`;
    }
}


class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 100, 20, 30);
    }

    atacar() {
        return `${this.nome} dispara uma flecha `;
    }

    defender() {
        return `${this.nome} se esquiva para evitar o ataque`;
    }
}