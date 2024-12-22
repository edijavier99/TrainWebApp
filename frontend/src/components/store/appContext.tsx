import React, { useState, useEffect } from "react";

// Definir el tipo de las acciones y el store
interface Store {
  someData: string;
}

interface Actions {
  someAction: () => void;
}

// El tipo de contexto debe incluir tanto el store como las acciones y la función setStore
interface ContextType {
  store: Store;
  actions: Actions;
  setStore: (updatedStore: Partial<Store>) => void;
}

// Inicializamos el contexto con `null`, pero se actualizará con el valor adecuado
export const Context = React.createContext<ContextType | null>(null);

// Esta función inyecta el store global a cualquier componente que lo use
const injectContext = (PassedComponent: React.ComponentType<any>) => {
  const StoreWrapper = (props: any) => {
    // Aquí inicializamos el estado con el store y la función setStore
    const [state, setState] = useState<ContextType>({
      store: {
        someData: "", // Inicializa con valores predeterminados si es necesario
      },
      actions: {
        someAction: () => {
          console.log("Action triggered");
        },
      },
      setStore: (updatedStore: Partial<Store>) => {
        setState((prevState) => ({
          store: { ...prevState.store, ...updatedStore },
          actions: { ...prevState.actions },
          setStore: prevState.setStore, // No modificar la función setStore
        }));
      },
    });

    useEffect(() => {
      // Aquí puedes agregar efectos como peticiones AJAX
    }, []);

    // El valor del contexto es el estado actual, que incluye store, actions y setStore
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
