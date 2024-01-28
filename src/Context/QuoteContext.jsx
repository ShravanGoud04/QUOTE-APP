
import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const intialState = {
    quoteData :null,
    //{_id: "k_WpPLnr1hYR",
    // content:
    //   "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
    // author: "Dalai Lama",
    // tags: ["Famous Quotes"],
    // authorSlug: "dalai-lama",
    // length: 86,
    // dateAdded: "2019-08-16",
    // dateModified: "2023-04-14",}
  };

  const [state, dispatch] = useReducer(QuoteReducer, intialState);

  return <QuoteContext.Provider value={{...state,dispatch}}>{children}</QuoteContext.Provider>;
};

export default QuoteContext;
