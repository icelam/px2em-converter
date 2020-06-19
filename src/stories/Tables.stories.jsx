import React from 'react';
import { action } from '@storybook/addon-actions';
import { FlexTable, PixelRemPair } from '@components';

export default {
  title: 'Tables'
};

export const FlexTableStory = () => {
  const pixelRemTableData = [12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 100].map((pixel) => {
    const pxWithUnit = `${pixel}px`;
    const remWithUnit = `${pixel / 16}rem`;

    return {
      key: `${pxWithUnit}-${remWithUnit}`,
      content: (
        <PixelRemPair pixel={pxWithUnit} rem={remWithUnit} copyToClipboard={action('clicked')} />
      )
    };
  });

  return <FlexTable data={pixelRemTableData} sm={1} md={2} lg={3} xl={4} />;
};

FlexTableStory.story = {
  name: 'Flex Table'
};
