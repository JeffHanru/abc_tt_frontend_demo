import "./InstagramIframeMedia.css";

interface InstagramIframeMediaProps {
  src: string;
}

export const InstagramIframeMedia = ({ src }: InstagramIframeMediaProps): JSX.Element => {
  return (
    <div className="wrapper">
      <span>Instagram Embed: <a href={src}>LINK</a></span>
    </div>
  );
};
