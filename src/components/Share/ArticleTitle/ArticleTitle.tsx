import "./ArticleTitle.css";

interface ArticleTitleProps {
  children: React.ReactNode;
}

export const ArticleTitle = ({
  children,
}: ArticleTitleProps): JSX.Element => {
  return <h1 className="article-title">{children}</h1>;
};
