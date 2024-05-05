import classnames from "classnames";
import "./ArticleMedia.css";

interface ArticleMediaProp {
  src?: string;
  altText?: string;
  caption?: string;
  suppliedText?: string;
  align?: string;
  isFeature?: boolean;
}

export const ArticleMedia = ({
  altText,
  src,
  caption,
  suppliedText,
  align = "embed",
  isFeature = false,
}: ArticleMediaProp): JSX.Element => {
  const containerClassName = classnames({
    "embed-media-container": align === "embed" && !isFeature,
    "embed-media-container-right-align": align === "right" && !isFeature,
    "feature-media-container": isFeature,
  });

  const captionClassName = classnames("media-caption", {
    "feature-media-caption": isFeature,
  });
  return (
    <figure className={containerClassName}>
      <div>
        <img className={"feature-media"} alt={altText} src={src} />
      </div>

      {caption && (
        <figcaption className={captionClassName}>
          {caption} {suppliedText && <i>({suppliedText})</i>}
        </figcaption>
      )}
    </figure>
  );
};
