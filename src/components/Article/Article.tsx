import React from "react";
import styles from "./Article.module.css";
// import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: string;
  contributors?: contributorProps[];
  dates?: {
    posted: string;
    updated?: string;
  };
  source?: sourceProps;
}

interface contributorProps {
  name: string;
  canonicalURL: string;
}

interface sourceProps {
  name: string;
  sourceURL: string;
}

const Article = ({
  children,
  title,
  contributors,
  dates,
  source,
}: Props): JSX.Element => (
  <article className={styles.article}>
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.subHeader}>
          {source && (
            <><a href={source.sourceURL}>{source.name}</a>&nbsp;/&nbsp;</>
          )}
          {contributors && contributors.length && (
            <span className={styles.contributors}>
              By{" "}
              {contributors.map((contributor, index) => {
                if (index === contributors.length - 1) {
                  return (
                    <a href={contributor.canonicalURL}>{contributor.name}</a>
                  );
                }
                return (
                  <>
                    <a href={contributor.canonicalURL}>{contributor.name}</a>{" "}
                    and{" "}
                  </>
                );
              })}
            </span>
          )}
        </div>

        {dates && (
          <span className={styles.date}>
            {dates.posted && <span>Posted {dates.posted}</span>}
            {dates.updated && <span> Updated {dates.updated}</span>}
          </span>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
    <div className={styles.sidebar}>
      <h2>More Stories</h2>
      <div className={styles.moreStories} />
    </div>
  </article>
);

export default Article;
