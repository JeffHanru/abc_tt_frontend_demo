import { generateArticleItems } from "./generateArticleItems";
// eslint-disable-next-line jest/no-mocks-import
import {
  sampleArticleData,
  sampleImageData,
  sampleImageMedia,
  sampleInstagramEmbedMedia,
  sampleInstagrameData,
  sampleQuoteData,
  sampleTeaserData,
  sampleTeaserMedia,
  sampleNoMatchData,
  sampleNonExistTypeData
} from "./__mocks__/data";

jest.mock("../components/Share", () => {
  return {
    ArticleMedia: () => "ArticleMedia",
    ArticleText: () => "ArticleText",
    ArticleTitle: () => "ArticleTitle",
    InstagramIframeMedia: () => "InstagramIframeMedia",
    TeaserMedia: () => "TeaserMedia",
  };
});

const mediaData = [sampleImageMedia, sampleInstagramEmbedMedia, sampleTeaserMedia]

describe("generateArticleItems", () => {
  // Since all actually rendered component in this method have their specific unit test,
  // It is safe to do snapshot test
  it("renders the ArticleText content as expected", () => {
    const result = generateArticleItems(sampleArticleData, mediaData);
    expect(result).toMatchSnapshot();
  });

  it("renders the QuoteText content as expected", () => {
    const result = generateArticleItems(sampleQuoteData, mediaData);
    expect(result).toMatchSnapshot();
  });

  it("renders the image media content as expected", () => {
    const result = generateArticleItems(sampleImageData, mediaData);
    expect(result).toMatchSnapshot();
  });

  it("renders the instagram media content as expected", () => {
    const result = generateArticleItems(sampleInstagrameData, mediaData);
    expect(result).toMatchSnapshot();
  });

  it("renders the teaser media content as expected", () => {
    const result = generateArticleItems(sampleTeaserData, mediaData);
    expect(result).toMatchSnapshot();
  });

  it("renders no match media content as expected", () => {
    const result = generateArticleItems(sampleNoMatchData, mediaData);
    expect(result).toMatchSnapshot();
  });

  it("renders non exist type data as expected", () => {
    const result = generateArticleItems(sampleNonExistTypeData, mediaData);
    expect(result).toMatchSnapshot();
  });
});
