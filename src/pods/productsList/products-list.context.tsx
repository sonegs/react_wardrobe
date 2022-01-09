import React from "react";

interface EditButtonsContext {
    sizeColumns: string;
    setSizeColumns: (value: string) => void;
}

// Componente en el que se inyecta el contexto
export const ProductsListContext = React.createContext<EditButtonsContext>({
    sizeColumns: "",
    setSizeColumns: (value) => {}
});
// Contexto. Lo meto dentro de MyContext
export const ProductsListContextComponent: React.FC = (props) => {
  const [sizeColumns, setSizeColumns] = React.useState("big");

    return (
        <ProductsListContext.Provider value={{ sizeColumns, setSizeColumns}}>
            {props.children}
        </ProductsListContext.Provider>
    )
};
