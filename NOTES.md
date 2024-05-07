# Notes / Documentation

Thanks to ABC News for providing this technical test for me. In this document, I will firstly cover some principles I followed throughout the development process. Then talk about the thought of train when I was working on two technical tasks. In the end,  I will answer the question mentioned in the README document.

## Before start the app

1. Make sure the node version is below v18. The one I used is v16.14.0

2. To run test, type `npm test` in the terminal, if it shows no test in last commit, type `a` in the terminal

## Development principle
1. As README file requeset, avoid using over engineered solution.

2. To optimise the readability, each file should always have only one specific purpose. For example, rendering the component, handling the data process, store complicated types or initiating the request (which is not covered in the demo project). By doing so, the reader can be very clearly about the intention of each file.

3. To optimise the testability, each ui and foundamental components should have their own test files.

4. To align with the existing project pattern. Try best to stick with the exsiting code style, files structure and etc.

## Task 1:  Article layout + basic components

The first step is to read the actual page and paylaod to see if relevant information such as contributor, dates, article text, image and embed link are available. After go through the json response file, It can be confirmed that the required data are all provided.

It is clearly that the layout of two pages are very similiar. Ideally, a shared component should be create to handle both `Artile 1` and `Artile 2`, and then load the data based on the url path. But since the requirement mentioned keep it simple when it comes to importing the JSON file. I skipped this step. In commercial project, this step should not be skipped.

To render the article content organizedly, it is necessary create a shared ui component folder/library. When iterating the list of `text.json.children` from payload, corresponding component can be used based on the condition check made by `tagname`, `doctype` and etc.

I crreated a hook called `useArticle` to centralise the logic of processing data before it is consumed by the component. This can improve the readability of component and also expose the only needed variable.

I created a funciton `generateArticleItems` to centralise the logic of rendering article elements. Both the text data and supported media data should be passed in. Based on the `tagname`, the component type can identified. If tagname is `a`, a further check for `viewType` and `docType` should be implement to know if it is for third party embed content, image media or teaser media. If nothing matched, return null in the end to avoid app breaks.

The page also contain the information such as contributors and dates, so they should be covered as well.

## 2. Task 2: Adding Third-party embeds

Since the ui components has been established in task 1. It is fairly straightforward to apply most of the content from `article2.json` to the page. The exceptions are third party embeds and teaser media. So two new ui components should be created.

The third party embeds can be different format. It is a instagram snippet this time, but it can be other format such as a youtube vedio, a tiktok clip and something else. To make further development more organized, I created a `IframeMedia` folder, so other third-party embeds components can be added here as well. When it comes to file naming pattern, I make sure the file name indicates the intention very clearly. In this case, `InstagramIframeMedia.tsx` can be tuitive enough. In the future, silimair file like `YoutubeIframeMedia.tsx` or `TiktokIframeMedia.tsx` can be crreated.

Since this is a demo project, I render the third party embed as `<span>Instagram Embed: <a href="URL">LINK</a></span>` instead of real iframe content.

## Additional Notes

**Questions:**
- Given the requirement to add an additional third-party embed, could this be done in a few simple steps? How would you explain to a developer how to add a YouTube Video embed.

Answer: As I mentioned in task 2 section. A file pattern has been established to handle scalling up of third party embeds. Take adding youtube video embed as example, it can be done in following steps
  - Create a relevant component named as `YoutubeIframeMedia` in `IframeMedia` folder
  - export the component in index.ts file
  - In `generateArticleItems`, based on the condition`embedMedia.viewType === "youtube"`, return the target iframe component.
