import { ExternalLink } from "../ExternalLink/ExternalLink";
import "./TeaserMedia.css";

interface TeaserMediaProps {
  title: string;
  text?: string;
  url?: string;
}

export const TeaserMedia = ({
  title,
  text = "",
  url = "/"
}: TeaserMediaProps): JSX.Element => {
  return <aside className="teaser-container">
    <h2 className="teaser-title">{title}</h2>
    <ExternalLink
      classNames="teaser-text"
      url={url}
      text={text}
    />
  </aside>;
};
