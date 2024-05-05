import "./InstagramIframeMedia.css";

interface InstagramIframeMediaProps {
  src: string;
}

export const InstagramIframeMedia = ({ src }: InstagramIframeMediaProps): JSX.Element => {
  return (
    <div className="wrapper">
      <iframe
        scrolling="no"
        src={`${src}embed/`}
        title="just"
        frameBorder="0"
      ></iframe>
    </div>
  );
};
