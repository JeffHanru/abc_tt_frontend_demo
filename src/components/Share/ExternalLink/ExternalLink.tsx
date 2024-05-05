interface ExternalLinkProps {
  url: string;
  text: string;
}

export const ExternalLink = ({ url, text }: ExternalLinkProps): JSX.Element => {
  return <a href={url}>{text}</a>;
};
