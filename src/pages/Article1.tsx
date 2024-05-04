import React from "react";
import Article from "../components/Article/Article";
import data from "../data/article1.json";

const Article1 = () => {
  console.log(data)

  const { _embedded, source, sourceURL, dates } = data
  const contributors = _embedded.contributors.map(contributor => {
    return {
      name: contributor.names.full,
      canonicalURL: contributor.canonicalURL,
    }
  })

  const sourceData = { name: source, sourceURL }

  console.log(contributors)
  return <Article title={data.title} contributors={contributors} source={sourceData}>{JSON.stringify(data.text)}</Article>;
};

export default Article1;
