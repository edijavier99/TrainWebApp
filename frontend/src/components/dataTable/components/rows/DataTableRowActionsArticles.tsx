import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { articleSchema, Article } from "../../data/schema"; // Import Client type
import { useNavigate } from "react-router-dom";


interface DataTableRowActionsProps {
  row: Row<Article>; // Use Client type directly
}

// Component for row actions in the data table
export function DataTableRowActionsArticles({
  row,
}: DataTableRowActionsProps) {
  const navigate = useNavigate();

  // Validate the row data using the schema (this is a good practice)
  const article = articleSchema.parse(row.original); // This validates the row data

  // Helper function to handle navigation based on dynamic path
  const navigateTo = (path: string) => {
    navigate(path);
  };

  // Handle the delete action (you could add your delete logic here)
  const handleDelete = () => {
    // Here, add your logic to delete the client, maybe with an API call
    console.log(`Deleting client with ID`);
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
        {/* View Profile option */}
        <DropdownMenuItem onClick={() => navigateTo(`/blog/article/${article.title}`)}>
          View Article
        </DropdownMenuItem>
      
        {/* Delete option */}
        <DropdownMenuItem onClick={() => navigateTo(`/progress/`)}>
          Update
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem onClick={handleDelete}>
         Delete
        </DropdownMenuItem>        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
