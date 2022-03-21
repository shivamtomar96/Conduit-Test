import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

// console.log(breakIt); // Reference Error: Not defined

//  encodeURI('\uD800');  //URI Error

 // let breakIt = null;
 //console.log(breakIt); // Reference Error: Not defined

 // breakIt()   //TypeError: Not a function

  //console.log(breakIt.field); //Type Error: Cannot read property of null

  // let arr = [3, 4, 5];
  // console.log("Beyond the array: " + arr[3]); //printing "undefined"

//  var num = 1;
 // num.toPrecision(500);   // Range Error: toPrecision() argument must be between 1 and 100


  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default ArticleList;
