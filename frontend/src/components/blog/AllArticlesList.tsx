// import React, { useContext, useEffect, useState } from "react";
// import { Context } from '../store/appContext';
// import "../styles/components/allArticles.css";
// import { useNavigate } from "react-router-dom";
// import { useGetFetch } from "@/hooks/useGetFetch";

// // Definir el tipo de los artículos
// interface Article {
//   id: number;
//   title: string;
//   description: string;
//   image_url: string;
//   category: string;
//   day_posted: string;
// }

// export const AllArticles: React.FC = () => {
//   const context = useContext(Context);
//   if (!context) {
//     // Si no hay contexto, puede ser una buena idea retornar un mensaje o hacer un fallback
//     return <div>Loading...</div>;
//   }
//   const { actions } = context; // Ahora 'actions' es accesible ya que estamos seguros de que 'context' no es null.

//   const [articlesList, setArticlesList] = useState<Article[]>([]);  // Lista de artículos
//   const [articleToDelete, setArticleToDelete] = useState<number | null>(null);  // ID del artículo a eliminar
//   const navigate = useNavigate();
  
//   // Asegúrate de que el hook useGetFetch tenga los tipos correctos
//   const { data: articles, loading, error } = useGetFetch<Article[]>(`${process.env.REACT_APP_BACKEND_URL}blog/post_list`);

//   useEffect(() => {
//     if (!loading && !error) {
//       setArticlesList(articles);
//     }
//   }, [articles, loading, error]);

//   const deleteArticle = () => {
//     if (articleToDelete === null) return;  // Si no hay un artículo seleccionado para eliminar, no hacer nada
    
//     const apiUrl = `${process.env.REACT_APP_BACKEND_URL}blog/post/delete/${articleToDelete}`;
//     fetch(apiUrl, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then((response) => {
//         if (response.ok) {
//           setArticlesList((prevArticles) =>
//             prevArticles.filter((article) => article.id !== articleToDelete)
//           );
//           setArticleToDelete(null);
//         } else {
//           console.error("Failed to delete article");
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting article:", error);
//       });
//   };

//   const handleEyeClick = (id: number) => {
//     navigate(`/blog/post/${id}`);
//   };

//   const handlePenClick = (item_id: number) => {
//     actions.fetchSingleArticle(item_id); // Esto debería funcionar si fetchSingleArticle está correctamente definida en actions
//   };

//   const showArticles = () => {
//     return articlesList.map((item) => (
//       <article id="admin_article_list" key={item.id}>
//         <p>{item.title}</p>
//         <div>
//           <i onClick={() => handleEyeClick(item.id)} className="fa-solid fa-eye me-3"></i>
//           <i
//             onClick={() => handlePenClick(item.id)}
//             data-bs-toggle="modal"
//             data-bs-target="#editModal"
//             className="fa-solid fa-pen me-3"
//           ></i>
//           <i
//             onClick={() => setArticleToDelete(item.id)}
//             data-bs-toggle="modal"
//             data-bs-target="#deleteModal"
//             className="fa-solid fa-trash"
//           ></i>
//         </div>
//       </article>
//     ));
//   };

//   return (
//     <>
//       {articlesList.length > 0 ? (
//         showArticles()
//       ) : (
//         <p>Loading articles...</p>
//       )}

//       <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content rounded-3 shadow">
//             <div className="modal-body p-4 text-center">
//               <h5 className="mb-0">Are you sure you want to delete?</h5>
//               <p className="mb-0">You can always change your mind.</p>
//             </div>
//             <div className="modal-footer flex-nowrap p-0">
//               <button
//                 type="button"
//                 onClick={deleteArticle}
//                 className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
//                 data-bs-dismiss="modal"
//               >
//                 <strong>Yes, delete</strong>
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
//                 data-bs-dismiss="modal"
//               >
//                 No thanks
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content rounded-3 shadow">
//             <div className="modal-body p-4 text-center">
//               <h5 className="mb-0">Edit Article</h5>
//             </div>
//             <div className="modal-footer flex-nowrap p-0">
//               <button
//                 type="button"
//                 onClick={deleteArticle}
//                 className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
//                 data-bs-dismiss="modal"
//               >
//                 <strong>Yes, delete</strong>
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
//                 data-bs-dismiss="modal"
//               >
//                 No thanks
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export const AllArticles: React.FC = () => {
  return(
    <div>
      All articles
    </div>
  )
}

