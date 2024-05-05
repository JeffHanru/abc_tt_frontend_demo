import "./IframeMedia.css";

interface IframeMediaProps {
  src: string;
}

export const IframeMedia = ({ src }: IframeMediaProps): JSX.Element => {
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
