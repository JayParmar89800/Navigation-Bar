import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  
  constructor() {
    super();
    console.log("hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=112c76b6ce774b699c7db99508e526b7&page=1pageSize=20";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
  }
  handlePrevClick = async () => {
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=112c76b6ce774b699c7db99508e526b7&page=${
        this.state.page - 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
      });
    }
  };
  
  handleNextClick = async () => {
    if (this.state.page * 20 < this.state.totalResults) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=112c76b6ce774b699c7db99508e526b7&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  
  render() {
    return (
      <div className="container-fluid bg-success-subtle">
        <div className="container py-4">
          <h2>NewsMonkey -Top Headline</h2>
          <div className="row">
          {this.state.articles.map((element) => {
            return (
              
                <div className="col-lg-3 col-md-4 col-12"  key={element.url}>
                  <NewsItems
                   
                    title={element.title?element.title.slice(0,45):""}
                    description={element.description?element.description.slice(0,65):""}
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
             
            );
          })}
           </div>
           <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           </div>
        </div>
      </div>
    );
  }
}

export default News;
