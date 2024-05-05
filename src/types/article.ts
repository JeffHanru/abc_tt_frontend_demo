export interface NormalTextProps {
  content: string;
  type: string;
}

export interface QuoteTextProps {
  content: string;
  type: string;
  children: { content: string; type: string }[];
}

export interface ArticleProps {
  children: React.ReactNode;
  title: string;
  contributors?: contributorProps[];
  dates?: datesProps;
  source?: sourceProps;
  featureMedia?: {
    altText?: string;
    caption?: string;
    supplied?: boolean;
    src: string;
  };
}

export interface ArticleHeaderProps {
  title: string;
  contributors?: contributorProps[];
  dates?: datesProps;
  source?: sourceProps;
}

export interface ArticleContentProps {
  children: React.ReactNode;
  dates?: datesProps;
}

interface contributorProps {
  name: string;
  canonicalURL: string;
}

interface sourceProps {
  name: string;
  sourceURL: string;
}

interface datesProps {
  posted: string;
  updated?: string;
}