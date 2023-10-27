import React, { Component } from "react";
import NewsItems from "./NewsItems";
import LoaderSpinner from "./LoaderSpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstsLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title=`${this.capitalizeFirstsLetter(this.props.category)}-NewsMokey`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({page:this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({page:this.state.page + 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {
  
   this.setState({page:this.state.page + 1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  //  this.setState({ loading: true });
   let data = await fetch(url);
   let parsedData = await data.json();

   this.setState({
     articles: this.state.articles.concat(parsedData.articles),
     totalResults: parsedData.totalResults,
    //  loading: false,
   });
   
  };
  render() {
    return (
      <>
          <h2 className="text-center text-danger fw-bold scroll-text py-3">
            NewsMonkey - Top {this.capitalizeFirstsLetter(this.props.category)}
          </h2>

          {this.state.loading && <LoaderSpinner />}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<LoaderSpinner/>}
        >
          <div className="container ">
          <div className="row ">
            {this.state.articles.map((element,index) => {
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
}

export default News;
