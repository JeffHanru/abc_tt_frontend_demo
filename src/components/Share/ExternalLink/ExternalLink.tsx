interface ExternalLinkProps {
  url: string;
  text: string;
  classNames?: string;
}

export const ExternalLink = ({ url, text, classNames }: ExternalLinkProps): JSX.Element => {
  return <a className={classNames} href={url}>{text}</a>;
};
