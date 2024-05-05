import dayjs from "dayjs";
import styles from "./Article.module.css";
import { ArticleContentProps } from "../../types";

export const ArticleContent = ({
  children,
  dates,
}: ArticleContentProps): JSX.Element => {
  return (
    <div className={styles.content}>
      {children}
      {dates && (
        <div className={styles["date-bottom"]}>
          {dates.posted && (
            <span>Posted {dayjs(dates.posted).format("DD MMM YYYY")}</span>
          )}
          {dates.updated && (
            <span>, Updated {dayjs(dates.updated).format("DD MMM YYYY")}</span>
          )}
        </div>
      )}
    </div>
  );
};
