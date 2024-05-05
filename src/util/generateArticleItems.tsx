import {
  ArticleMedia,
  ArticleText,
  ArticleTitle,
  InstagramIframeMedia,
  TeaserMedia,
} from "../components/Share";
import { NormalTextProps, QuoteTextProps, Text, MediaEmbedded } from "../types";

export const generateArticleItems = (
  text: Text,
  mediaEmbedded: MediaEmbedded[]
) => {
  return (
    <>
      {text.json.children.map((element) => {
        const { tagname, children } = element;

        if (tagname === "p") {
          const componentInfo = children[0] as NormalTextProps;
          return <ArticleText>{componentInfo.content}</ArticleText>;
        }

        if (tagname === "pullquote") {
          const componentInfo = children[0] as QuoteTextProps;
          return (
            <ArticleText variant="quote">
              {componentInfo.children[0].content}
            </ArticleText>
          );
        }

        if (tagname === "a") {
          const embedMedia = mediaEmbedded.find(
            (media) => media.id === element.parameters?.ref
          );
          // console.log(embedMedia);
          if (
            embedMedia?.externalembed &&
            embedMedia.viewType === "instagram"
          ) {
            return <InstagramIframeMedia src={embedMedia.externalembed.url} />;
          }
          if (embedMedia && (embedMedia.docType === "ImageProxy" || embedMedia.docType === "Image")) {
            const contentText = embedMedia.byLine?.json.children[0].children
              ? embedMedia.byLine.json.children[0].children[0].content
              : "";

            const embedMediaInfo = {
              src: embedMedia.media?.image.primary.complete[0].url,
              caption: embedMedia.caption,
              suppliedText: contentText,
              align: element.parameters?.align,
            };
            return <ArticleMedia {...embedMediaInfo} />;
          }
          if(embedMedia && embedMedia.docType === "Teaser") {
            console.log(embedMedia.synopsis?.split("\n"))
            // const teaserText = embedMedia.teaserText?.json.children.find()
            return <TeaserMedia 
              title={embedMedia.title}
              text={embedMedia.synopsis?.split("\n")[1]}
              url={embedMedia._embedded?.mediaEmbedded[0].canonicalURL}
            />
          }
          return null;
        }

        if (tagname === "h1") {
          const componentInfo = children[0] as NormalTextProps;

          return <ArticleTitle>{componentInfo.content}</ArticleTitle>;
        }
        return "otherwise default";
      })}
    </>
  );
};
