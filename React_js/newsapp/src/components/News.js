import React, { Component } from "react";
import NewsItems from "./NewsItems";
import LoaderSpinner from "./LoaderSpinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country:'in',
    pagesize:8,
    category:'general'
  }
  static propTypes ={
     country:PropTypes.string,
     pagesize:PropTypes.number,
     category:PropTypes.string,
  }
  
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
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=112c76b6ce774b699c7db99508e526b7&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }
  handlePrevClick = async () => {
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=112c76b6ce774b699c7db99508e526b7&page=${
        this.state.page - 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false,
      });
    }
  };
  
  handleNextClick = async () => {
    if (this.state.page * this.props.pagesize < this.state.totalResults) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=112c76b6ce774b699c7db99508e526b7&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false,
      });
    }
  };
  
  render() {
    return (
      <div className="container-fluid bg-dark-subtle">
        <div className="container py-4" style={{maxHeight:'auto',minHeight:'90vh'}}>
        <marquee behavior="scroll" direction="left" scrollamount="15"> <h2 className="text-center text-danger fw-bold">NewsMonkey -Top Headline</h2></marquee>
         
          {this.state.loading && <LoaderSpinner/>}
          <div className="row ">

          {!this.state.loading && this.state.articles.map((element) => {
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
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)}  className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           </div>
        </div>
      </div>
    );
  }
}

export default News;
