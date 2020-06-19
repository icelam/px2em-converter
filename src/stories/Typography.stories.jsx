import React from 'react';
import {
  AppTitle, Remarks, ErrorMessage, PixelRemPair
} from '@components';

const dummyText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const dummyText2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

export default {
  title: 'Typography'
};

export const AppTitleStory = () => <AppTitle>App Title</AppTitle>;

AppTitleStory.story = {
  name: 'App Title'
};

export const HeadingsStory = () => (
  <>
    <h1>Headings 1</h1>
    <h2>Headings 2</h2>
    <h3>Headings 3</h3>
    <h4>Headings 4</h4>
    <h5>Headings 5</h5>
    <h6>Headings 6</h6>
  </>
);

HeadingsStory.story = {
  name: 'Headings'
};

export const ParagraphStory = () => (
  <>
    <p>{dummyText1}</p>
    <p>{dummyText2}</p>
  </>
);

ParagraphStory.story = {
  name: 'Paragraph'
};

export const LinkStory = () => (
  <>
    <p>
      Here goes a link that sits between paragraphs:{' '}
      <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">
        Open Storybook documentation
      </a>
      . Here are some more texts.
    </p>
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
      A standalone link that goes to Google
    </a>
  </>
);

LinkStory.story = {
  name: 'Link'
};

export const RemarksStory = () => <Remarks>This is a smaple remarks</Remarks>;

RemarksStory.story = {
  name: 'Remarks'
};

export const ErrorMessageStory = () => <ErrorMessage>This is a smaple error message</ErrorMessage>;

ErrorMessageStory.story = {
  name: 'Error Message'
};

export const PxToRemPairStory = () => <PixelRemPair pixel="16px" rem="1rem" />;

PxToRemPairStory.story = {
  name: 'px to rem Pair'
};
