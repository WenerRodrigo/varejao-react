import { createContext, useState } from "react";

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposPagamento = [{
        nome: "Boleto",
        juros: 1,
        id: 1
    }, {
        nome: "Cartão de Crédito",
        juros: 1.3,
        id: 2
    }, {
        nome: "Pix",
        juros: 1,
        id: 3
    }, {
        nome: "Cheque Especial",
        juros: 1.7,
        id: 4
    }];
    const [ formasPagamento, setFormasPagamento] = useState(tiposPagamento[0]);
    return (
        <PagamentoContext.Provider value={{
            tiposPagamento,
            formasPagamento,
            setFormasPagamento
        }}>
            {children}
        </PagamentoContext.Provider>
    )
}