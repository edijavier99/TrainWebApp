import { createContext, useState, ReactNode, useContext } from "react";

// Initialize context with `null` to detect unwrapped use of the context.
export const ModalContext = createContext<{
    activeModal: string | null; // Guardar el identificador del modal activo
    setActiveModal: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    return (
        <ModalContext.Provider value={{ activeModal, setActiveModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
