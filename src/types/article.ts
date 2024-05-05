export interface NormalTextProps {
  content: string;
  type: string;
}

export interface QuoteTextProps {
  content: string;
  type: string;
  children: { content: string; type: string }[];
}