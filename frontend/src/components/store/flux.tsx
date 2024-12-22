import React, { createContext, useState } from 'react';

// Definir los tipos de store y actions
interface Store {
  allArticles: any[];
  singleArticle: any[];
  refresh: boolean;
}

interface Actions {
  capitalizeFirstLetter: (text: string) => string;
  fetchAllArticles: () => void;
  fetchSingleArticle: (article_id: number) => void;  // Asegúrate de que esta función esté en Actions
}

// El tipo del contexto (store y actions)
interface ContextType {
  store: Store;
  actions: Actions;
}

// Crear un contexto con tipo que puede ser null inicialmente
export const Context = createContext<ContextType | null>(null);

const injectContext = (PassedComponent: React.FC) => {
  const StoreWrapper = (props: any) => {
    const [state, setState] = useState({
      store: {
        allArticles: [],
        singleArticle: [],
        refresh: false,
      },
      actions: {
        capitalizeFirstLetter: (text: string) => {
          return text.charAt(0).toUpperCase() + text.slice(1);
        },
        fetchAllArticles: () => {
          const apiUrl = process.env.REACT_APP_BACKEND_URL;
          fetch(`${apiUrl}api/articles/`)
            .then((response) => response.json())
            .then((data) => {
              setState((prevState) => ({
                ...prevState,
                store: { ...prevState.store, allArticles: data },
              }));
            })
            .catch((error) => console.error('Error fetching articles:', error));
        },
        fetchSingleArticle: (article_id: number) => {
          const apiUrl = process.env.REACT_APP_BACKEND_URL;
          fetch(`${apiUrl}api/article/${article_id}`)
            .then((response) => response.json())
            .then((data) => {
              setState((prevState) => ({
                ...prevState,
                store: { ...prevState.store, singleArticle: data },
              }));
            })
            .catch((error) => console.error('Error fetching article:', error));
        },
      },
    });

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
