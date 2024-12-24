import { useModalContext } from "@/context/ModalContext";
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { CgClose } from "react-icons/cg";


interface Props {
    children: React.ReactNode;
    modalId: string; // Identificador único del modal
}

export const CustomModal = ({ children, modalId }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { activeModal, setActiveModal } = useModalContext();

    const closeModal = () => setActiveModal(null);

    const modalRoot = document.getElementById("modal");

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveModal(null);
            }
        };
        if (activeModal === modalId) {
            document.addEventListener("keydown", handleEscape);
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [activeModal, modalId, setActiveModal]);

    if (activeModal !== modalId || !modalRoot) {
        return null;
    }

    return createPortal(
        <div
            className="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
            onClick={closeModal}
        >
            <div
                className="modal relative flex flex-col space-y-5 bg-white p-4 rounded-lg shadow-lg transform text-black transition-transform duration-300 scale-95"
                onClick={handleContentClick}
                ref={modalRef}
            >
                <button
                    className="absolute top-2 right-2 text-black "
                    onClick={closeModal}
                >
                    <CgClose className="w-6 h-6" />
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>,
        modalRoot
    );
};
