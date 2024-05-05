import dayjs from "dayjs"
import { ExternalLink } from "../Share";
import styles from "./Article.module.css";
import { ArticleHeaderProps } from "../../types";

export const ArticleHeader = ({title, source, contributors, dates }: ArticleHeaderProps) => {
  return <div className={styles.header}>
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
}