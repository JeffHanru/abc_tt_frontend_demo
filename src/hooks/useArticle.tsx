import { DataProp } from "../types";

export const useArticle = (data: DataProp) => {
  const { _embedded, source, sourceURL, dates, text, featuredMedia } = data;
  const { contributors, mediaFeatured, mediaEmbedded } = _embedded;
  const contributorsInfo = contributors.map((contributor) => {
    return {
      name: contributor.names.full,
      canonicalURL: contributor.canonicalURL,
    };
  });

  const sourceData = { name: source, sourceURL };

  const datesInfo = {
    posted: dates.published,
    updated: dates.updated,
  };

  const featuredContent = mediaFeatured.find((media) => {
    return media.id === featuredMedia[0].id;
  });

  const contentText = featuredContent?.byLine.json.children[0].children
    ? featuredContent.byLine.json.children[0].children[0].content
    : undefined;

  const featuredMediaInfo = featuredContent
    ? {
        altText: featuredContent.alt,
        src: featuredContent.media.image.primary.complete[0].url,
        caption: featuredContent.caption,
        suppliedText: contentText,
      }
    : undefined;

  return {
    text,
    mediaEmbedded,
    contributorsInfo,
    sourceData,
    datesInfo,
    featuredMediaInfo,
  };
};
