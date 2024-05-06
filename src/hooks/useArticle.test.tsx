import { renderHook } from "@testing-library/react-hooks";
import { useArticle } from "./useArticle";
import { DataProp } from "../types";
// eslint-disable-next-line jest/no-mocks-import
import jsonData from "./__mocks__/data.json";
describe("useArticle", () => {
  test("should return the correct article data", () => {
    const data: DataProp = jsonData;

    const { result } = renderHook(() => useArticle(data));

    // Assert the expected result based on the provided data
    expect(result.current.contributorsInfo).toEqual([
      {
        canonicalURL: "https://www.abc.net.au/news/guy-williams/13494298",
        name: "Guy Williams",
      },
    ]);
    expect(result.current.datesInfo).toEqual({
      posted: "2021-11-21T20:13:18+00:00",
      updated: "2021-11-21T23:34:23+00:00",
    });
    expect(result.current.featuredMediaInfo).toEqual({
      altText: "Chanelle Olive standing in front of a sub-station",
      caption: "Chanelle Olive is an engineering manager at Energy Queensland.",
      src: "https://live-production.wcms.abc-cdn.net.au/b858be50a7033a3a198d471aca237e69?impolicy=wcms_crop_resize&cropH=1674&cropW=2976&xPos=0&yPos=310&width=862&height=485",
      suppliedText: "Supplied",
    });
    expect(result.current.sourceData).toEqual({
      name: "ABC Capricornia",
      sourceURL: "https://www.abc.net.au/radio/capricornia/",
    });
  });
});
