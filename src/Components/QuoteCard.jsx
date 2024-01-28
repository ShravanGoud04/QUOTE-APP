import ClipLoader from "react-spinners/ClipLoader";
import React, { useContext, useEffect } from "react";
import QuoteContext from "../Context/QuoteContext";
import { getData } from "../Context/QuoteAction";

const QuoteCard = () => {
  const { quoteData, dispatch } = useContext(QuoteContext);

  // const{content,author, tags}=quoteData

  const handleFetch = async () => {
    const data = await getData();
    // console.log(data);
    dispatch({
      type: "GET_QUOTE",
      payload: data,
    });
  };
  // useEffect(()=>{

   
  //     handleFetch()

  // },[])

  useEffect(() => {
    const interval = setInterval(() => {
      handleFetch();
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [quoteData]);

  if (!quoteData) {
    return (
      <div className='d-flex justify-content-center'>
        <div
          className='spinner-border text-primary'
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    ); //<h1 className="display-5 text-center">Loading....</h1>
  }

  return (
    <div className='card my-5 p-5 rounded-0 shadow-lg '>
      <h1 className='card-title'>{quoteData.content}</h1>
      {/* <p className="card-text">Something Here</p> */}
      <p className='text-secondary'>{quoteData.author}</p>
      <span>
        <span className='badge text-bg-primary rounded-0'>
          {quoteData.tags[0]}
        </span>
        <span className='badge text-bg-primary rounded-0 mx-4'>
          {quoteData.tags[1]}
        </span>
      </span>

      <button
        className=' btn btn-dark rounded-0 w-100 my-5'
        onClick={handleFetch}
      >
        Get More
      </button>
    </div>
  );
};

export default QuoteCard;
