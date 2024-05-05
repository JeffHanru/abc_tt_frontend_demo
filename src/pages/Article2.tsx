import Article from "../components/Article/Article";
import data from "../data/article2.json";
import { useArticle } from "../hooks/useArticle";
import { generateArticleItems } from "../util";

const Article2 = () => {
  const {
    text,
    mediaEmbedded,
    contributorsInfo,
    sourceData,
    datesInfo,
    featuredMediaInfo,
  } = useArticle(data);  

  return (
    <Article
      dates={datesInfo}
      title={data.title}
      contributors={contributorsInfo}
      source={sourceData}
      featureMedia={featuredMediaInfo}
    >
      {generateArticleItems(text, mediaEmbedded)}
    </Article>
  );
};

export default Article2;
