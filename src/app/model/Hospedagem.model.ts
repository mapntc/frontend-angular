import { Hospede } from "./Hospede.model";
import { Quarto } from "./Quarto.model";

export interface Hospedagem {
    idHospedagem?: number,
    quarto: Quarto,
    hospede: Hospede,
    dtCheckin: Date,
    dtCheckout: Date
}
