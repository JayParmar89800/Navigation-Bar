import React from "react";
import NewsItems from "./NewsItems";
import LoaderSpinner from "./LoaderSpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const News = (props) =>{
  
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  // document.title=`${capitalizeFirstsLetter(props.category)}-NewsMokey`;




  // capitalizeFirstsLetter=(string)=>{
  //   return string.charAt(0).toUpperCase()+string.slice(1);
  // }

  const updateNews = async () => {

    props.setProgress(10);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;

    setLoading(true);

    let data = await fetch(url);

    props.setProgress(30);

    let parsedData = await data.json();

    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  })

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //     setPage(page+1);
  //    updateNews();
  // };
  const fetchMoreData = async () => {
  
    setPage(page+1);
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
  //  this.setState({ loading: true });
   let data = await fetch(url);
   let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
  
   
  };
 
    return (
      <>
          <h2 className="text-center text-danger fw-bold scroll-text py-3">
            NewsMonkey - Top
             {/* {capitalizeFirstsLetter(props.category)} */}
          </h2>

          {loading && <LoaderSpinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<LoaderSpinner/>}
        >
          <div className="container ">
          <div className="row ">
            {articles.map((element,index) => {
                return (
                  <div className="col-lg-3 col-md-4 col-12" key={index}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 65)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
      </div>
          </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
