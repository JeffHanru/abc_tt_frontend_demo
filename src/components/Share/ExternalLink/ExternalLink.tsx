interface ExternalLinkProps {
  url: string;
  text: string;
}

const ExternalLink = ({ url, text }: ExternalLinkProps): JSX.Element => {
  return <a href={url}>{text}</a>;
};
