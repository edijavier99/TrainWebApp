import { useState } from "react";
import { Button } from "./ui/button";
import { ProfileObjectivesRow } from "./dataTable/components/rows/ProfileObjectivesRow";
import { IoAddCircle } from "react-icons/io5";

const Observations = () => {
  const [observations, setObservations] = useState<string[]>([]);
  const [newObservation, setNewObservation] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedObservation, setEditedObservation] = useState("");

  // Función para agregar una nueva observación
  const addObservation = () => {
    if (newObservation.trim() === "") return;
    setObservations([...observations, newObservation]);
    setNewObservation(""); // Limpiar el campo después de agregar
  };

  // Función para eliminar una observación
  const deleteObservation = (index: number) => {
    const updatedObservations = observations.filter((_, i) => i !== index);
    setObservations(updatedObservations);
  };

  // Función para empezar a editar una observación
  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditedObservation(observations[index]);
  };

  // Función para guardar la observación editada
  const saveEdit = () => {
    if (editedObservation.trim() === "") return;
    const updatedObservations = observations.map((obs, index) =>
      index === editingIndex ? editedObservation : obs
    );
    setObservations(updatedObservations);
    setEditingIndex(null); // Salir del modo de edición
    setEditedObservation(""); // Limpiar el campo de edición
  };

  return (
    <div className="space-y-4">
      {/* Campo para agregar nueva observación */}
      <div className="flex items-center space-x-3">
        <textarea
          className="p-2 border rounded-md w-full"
          placeholder="Add new observation..."
          value={newObservation}
          onChange={(e) => setNewObservation(e.target.value)}
        />
        <Button
          onClick={addObservation}
        >
          <IoAddCircle />

        </Button>
      </div>

      {/* Lista de observaciones con scroll */}
      <div
        className="space-y-3 max-h-96 overflow-y-auto" // Limitamos la altura y habilitamos el scroll
        style={{ maxHeight: "300px" }}
      >
        {observations.map((obs, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md border"
          >
            {/* Si estamos editando esta observación, mostramos un campo de texto */}
            {editingIndex === index ? (
              <div className="flex items-center space-x-2 w-full">
                <textarea
                  className="p-2 border rounded-md w-full"
                  value={editedObservation}
                  onChange={(e) => setEditedObservation(e.target.value)}
                />
                <Button
                  onClick={saveEdit}
                >
                  Save
                </Button>
                <Button
                  onClick={() => setEditingIndex(null)}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between space-x-2 w-full">
                <p className="text-gray-700">{obs}</p>
                <ProfileObjectivesRow/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Observations;
