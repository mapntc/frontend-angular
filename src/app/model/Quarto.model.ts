import { Hotel } from "./Hotel.model";

export interface Quarto {
    idQuarto?: number,
    hotel?: Hotel,
    categoriaQuarto?: string,
    qtdLeito?: number,
    nrQuarto?: number,
    prDiaria?: number
}
