import { useState, useEffect } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { useGetAxiosRequest } from "@/hooks/useGetAxiosRequest";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Article } from "@/types";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"; // Importación de los componentes de paginación

const Blog = () => {
  const [page, setPage] = useState(1); // Estado para la página actual

  // Realizamos la solicitud con el parámetro de página
  const { data, loading, error } = useGetAxiosRequest<{
    count: number;
    next: string | null;
    previous: string | null;
    results: Article[];
  }>(`${import.meta.env.VITE_BACKEND_URL}api/articles/?page=${page}`);

  useEffect(() => {
    // Cuando cambie la página, el hook useEffect se activará y actualizará la URL
  }, [page]);

  const handleNextPage = () => {
    if (data && data.next) {
      setPage((prevPage) => prevPage + 1); // Aumenta la página si hay una página siguiente
    }
  };

  const handlePrevPage = () => {
    if (data && data.previous) {
      setPage((prevPage) => prevPage - 1); // Disminuye la página si hay una página anterior
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load articles. Please try again later.</p>;
  }

  if (!data || data.results.length === 0) {
    return <p className="text-center text-gray-500">No articles available at the moment.</p>;
  }

  // Calculando el número total de páginas a partir del total de artículos y artículos por página
  const totalPages = Math.ceil(data.count / 10); // Ajustar según el número de artículos por página

  return (
    <section>
      <div className="text-center space-y-5 py-[60px]">
        <p className="font-bold text-[#FF7F50] text-sm">Blog</p>
        <h2 className="font-bold text-4xl">Welcome To Your Source of Inspiration</h2>
        <p className="text-[#667085] text-medium w-[90%] md:w-[50%] mx-auto">
          Explore articles packed with actionable fitness tips, strategies for a strong mindset, health improvement ideas, and everyday advice that makes a difference. Our blog is here to inspire and support you, no matter your goals.
        </p>
        <div className="flex items-center flex-col justify-center">
          <span className="text-sm text-gray-400 mt-2">
            Your privacy matters to us. Learn more in our{" "}
            <a href="/privacy-policy/" className="underline">Privacy Policy</a>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {data.results.map((article) => (
          <BlogCard key={article.artitle_title} article={article} />
        ))}
      </div>

      {/* Componente de Paginación de ShadCN */}
      <Pagination>
        <PaginationContent>
          {/* Página Anterior */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={handlePrevPage}
            />
          </PaginationItem>

          {/* Página 1 */}
          {page > 1 && (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => setPage(1)}>
                1
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Páginas intermedias */}
          {page > 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

          {/* Página actual */}
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {page}
            </PaginationLink>
          </PaginationItem>

          {/* Páginas posteriores */}
          {page < totalPages - 1 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

          {/* Página Final */}
          {page < totalPages && (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => setPage(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Página Siguiente */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Blog;
