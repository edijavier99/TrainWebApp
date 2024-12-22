import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";


// Component for row actions in the data table
export function ProfileObjectivesRow({

}) {
  const navigate = useNavigate();

  // Helper function to handle navigation based on dynamic path
  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {/* Update option */}
        <DropdownMenuItem onClick={() => navigateTo(`/update-client/`)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator/>       

        {/* Delete option */}
        <DropdownMenuItem onClick={() => navigateTo(`/progress/`)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
