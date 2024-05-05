import React from "react";
import styles from "./Article.module.css";
import { ExternalLink, ArticleMedia } from "../Share";
import dayjs from "dayjs";

interface Props {
  children: React.ReactNode;
  title: string;
  contributors?: contributorProps[];
  dates?: datesProps;
  source?: sourceProps;
  featureMedia?: {
    altText?: string;
    caption?: string;
    supplied?: boolean;
    src: string;
  };
}

interface contributorProps {
  name: string;
  canonicalURL: string;
}

interface sourceProps {
  name: string;
  sourceURL: string;
}

interface datesProps {
  posted: string;
  updated?: string;
}

const Article = ({
  children,
  title,
  contributors,
  dates,
  source,
  featureMedia,
}: Props): JSX.Element => (
  <article className={styles.article}>
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.subHeader}>
          {source && (
            <>
              <ExternalLink url={source.sourceURL} text={source.name} />
              &nbsp;/&nbsp;
            </>
          )}
          {contributors && contributors.length && (
            <span className={styles.contributors}>
              By{" "}
              {contributors.map((contributor, index) => {
                return (
                  <span key={`${index}-${contributor.name}`}>
                    <ExternalLink
                      url={contributor.canonicalURL}
                      text={contributor.name}
                    />
                    {index === contributors.length - 1 ? "" : " and "}
                  </span>
                );
              })}
            </span>
          )}
        </div>

        {dates && (
          <span className={styles.date}>
            {dates.posted && (
              <span>
                Posted{" "}
                {`${dayjs(dates.posted).format("ddd DD MMM YYYY")} at ${dayjs(
                  dates.posted
                ).format("HH:mmA")}`}
              </span>
            )}
            {dates.updated && (
              <span>
                , Updated{" "}
                {`${dayjs(dates.updated).format("ddd DD MMM YYYY")} at ${dayjs(
                  dates.updated
                ).format("HH:mmA")}`}
              </span>
            )}
          </span>
        )}
      </div>
      {featureMedia && <ArticleMedia {...featureMedia} isFeature />}
      <div className={styles.content}>
        {children}
        {dates && (
          <div className={styles["date-bottom"]}>
            {dates.posted && (
              <span>Posted {dayjs(dates.posted).format("DD MMM YYYY")}</span>
            )}
            {dates.updated && (
              <span>
                , Updated {dayjs(dates.updated).format("DD MMM YYYY")}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
    <div className={styles.sidebar}>
      <h2>More Stories</h2>
      <div className={styles.moreStories} />
    </div>
  </article>
);

export default Article;
