import "./ArticleText.css";
import classnames from "classnames";

interface ArticleTextProps {
  children: React.ReactNode;
  variant?: "normal" | "quote";
}

export const ArticleText = ({
  children,
  variant = "normal",
}: ArticleTextProps): JSX.Element => {
  const classNames = classnames({
    "text-normal": variant === "normal",
    "text-quote": variant === "quote",
  });

  return <p className={classNames}>{children}</p>;
};
