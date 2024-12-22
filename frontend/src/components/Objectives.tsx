import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { IoIosAddCircle } from "react-icons/io";
import { ProfileObjectivesRow } from "./dataTable/components/rows/ProfileObjectivesRow";

interface Objective {
  id: number;
  text: string;
  isCompleted: boolean;
}

const Objectives = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]);
  const [newObjective, setNewObjective] = useState("");

  // Función para agregar un objetivo
  const addObjective = () => {
    if (newObjective.trim() === "") return;
    const newObjectiveItem: Objective = {
      id: Date.now(),
      text: newObjective,
      isCompleted: false,
    };
    setObjectives([...objectives, newObjectiveItem]);
    setNewObjective(""); // Limpiar el campo de texto después de agregar
  };

  // Función para marcar un objetivo como completado
  const toggleObjectiveCompletion = (id: number) => {
    setObjectives(
      objectives.map((obj) =>
        obj.id === id ? { ...obj, isCompleted: !obj.isCompleted } : obj
      )
    );
  };

  // Función para eliminar un objetivo
  // const deleteObjective = (id: number) => {
  //   setObjectives(objectives.filter((obj) => obj.id !== id));
  // };

  return (
    <div className="space-y-4">
      {/* Campo para agregar nuevo objetivo */}
      <div className="flex items-center space-x-3">
        <Input
          type="text"
          className="p-2 border rounded-md flex-1"
          placeholder="Add new objective..."
          value={newObjective}
          onChange={(e) => setNewObjective(e.target.value)}
        />
        <Button
          onClick={addObjective}
        >
          <IoIosAddCircle />
        </Button>
      </div>

      {/* Lista de objetivos */}
      <div className="space-y-3">
        {objectives.map((objective) => (
          <div
            key={objective.id}
            className={`flex items-center justify-between p-3 rounded-md border ${
              objective.isCompleted ? "" : "bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-2">
              {/* Usamos el Checkbox de ShadCN */}
              <Checkbox
                id={`objective-${objective.id}`}
                checked={objective.isCompleted}
                onCheckedChange={() => toggleObjectiveCompletion(objective.id)}
                className="h-5 w-5"
              />
              <span className={`text-gray-700 ${objective.isCompleted ? "text-gray-400" : ""}`}>
                {objective.text}
              </span>
            </div>
            <ProfileObjectivesRow  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
