class Tablero{
    Pcasillas(casillas){
        switch(casillas){
            case 2: //escalera
                return 38;
            case 7://escalera
                return 14;
            case 8://escaleraa
                return 31;
            case 15://escalera
                return 26;
            case 16://serpiente
                return 6;
            case 21://escalera
                return 42;
            case 28://escalera
                return 84;
            case 36://escalera
                return 44;
            case 46://serpiente
                return 25;
            case 49://serpiente
                return 11;
            case 51://escalera
                return 67;
            case 62://serpiente
                return 19;
            case 64://serpiente
                return 60;
            case 71://escalera
                return 91;
            case 74://serpiente
                return 53;
            case 78://escalera
                return 98;
            case 87://escalera 
                return 94;
            case 89://serpiente
                return 68;
            case 92://serpiente
                return 88;
            case 95://serpiente
                return 75;
            case 99://serpiente
                return 80;
            default:
                return casillas;
        }
    }
}
class Dado{
    lanzar(){
        return Math.ceil(Math.random() * 6)
    }
}
class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.posicion = 0;
        this.avanza = 0;
    }
    avanzar(fin){
       this.avanza = this.posicion + fin;
       return this.avanza;
    }
}

let dado = new Dado();
let J1 = new Jugador('Abiskirri');
let J2 = new Jugador('Mairam');
let tablero = new Tablero();

while(J1.posicion <= 100 && J2.posicion <= 100){
    J1.posicion = tablero.Pcasillas(J1.avanzar(dado.lanzar()));
    J2.posicion = tablero.Pcasillas(J1.avanzar(dado.lanzar()));
    console.log(`${J1.nombre} avanzo a la posicion: ${J1.posicion} | ${J2.nombre} avanzo a la posicion: ${J2.posicion}`);
}

if(J1.posicion >= 100){
    console.log(`¡${J1.nombre} gano!`)
} else if(J2.posicion >= 100){
    console.log(`¡${J2.nombre} gano!`)
}