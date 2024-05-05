import styles from "./Article.module.css";
import { ArticleMedia } from "../Share";
import { ArticleProps } from "../../types";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";


const Article = ({
  children,
  title,
  contributors,
  dates,
  source,
  featureMedia,
}: ArticleProps): JSX.Element => (
  <article className={styles.article}>
    <div className={styles.main}>
      <ArticleHeader
        title={title}
        source={source}
        contributors={contributors}
        dates={dates}
      />
      {featureMedia && <ArticleMedia {...featureMedia} isFeature />}
      <ArticleContent dates={dates}>
        {children}
      </ArticleContent>
    </div>
    <div className={styles.sidebar}>
      <h2>More Stories</h2>
      <div className={styles.moreStories} />
    </div>
  </article>
);

export default Article;
