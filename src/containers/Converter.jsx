import React, { useState, useEffect, useCallback } from 'react';
import ConverterPage from '@pages/Converter';
import { useDebounce } from '@hooks';
import {
  isValidFontSize, convertPixelRangeToArray, roundToNearest, localStorageUtils
} from '@utils';
import { message } from '@components';

const Converter = () => {
  // Get and apply stored user inputs, fallback to default value when data not found
  const storedBaseFontSize = localStorageUtils.getKey('baseFontSize');
  const storedPixelRange = localStorageUtils.getKey('pixelRange');
  const storedDisplayUnit = localStorageUtils.getKey('displayUnit');

  const defaultBaseFontSize = storedBaseFontSize || '16';
  const defaultPixelRange = storedPixelRange || '12 - 20, 50, 100';
  const defaultDisplayUnit = storedDisplayUnit || 'em';

  const [displayUnit, setDisplayUnit] = useState(defaultDisplayUnit);
  const [baseFontSize, setBaseFontSize] = useState(defaultBaseFontSize);
  const [hasBaseFontSizeError, setHasBaseFontSizeError] = useState(false);
  const [pixelRange, setPixelRange] = useState(defaultPixelRange);
  const [hasPixelRangeFormatError, setHasPixelRangeFormatError] = useState(false);
  const [pixelRemList, setPixelRemList] = useState([]);

  const handleDisplayUnitChange = useCallback((value) => {
    setDisplayUnit(value);
    localStorageUtils.setKey('displayUnit', value);
  }, []);

  const handleBaseFontSizeChange = useCallback((event) => {
    setBaseFontSize(event.target.value);
  }, []);

  const handlePixelRangeChange = useCallback((event) => {
    setPixelRange(event.target.value);
  }, []);

  const copyRemToClipboard = useCallback((remRef) => {
    const { current: remNode } = remRef;

    if (!remNode) { return; }

    const range = document.createRange();
    range.selectNode(remNode);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');

    message.success('rem copied!', 1);

    window.getSelection().removeAllRanges();
  }, []);

  // Debounce validations and calculations for 500ms
  const debouncedBaseFontSize = useDebounce(baseFontSize, 500);
  const debouncedPixelRange = useDebounce(pixelRange, 500);

  useEffect(() => {
    const hasFontSizeError = !isValidFontSize(debouncedBaseFontSize);
    setHasBaseFontSizeError(hasFontSizeError);

    const pixelList = convertPixelRangeToArray(debouncedPixelRange);
    const isEmptyList = !(pixelList && pixelList.length);
    setHasPixelRangeFormatError(isEmptyList);

    // Calculate only when validation passed
    if (!(hasFontSizeError || isEmptyList)) {
      const pixelRemPair = pixelList.map((pixel) => {
        const rem = pixel / debouncedBaseFontSize;
        const remRounded = roundToNearest(rem, 4);
        return ({ pixel, rem: remRounded });
      });

      setPixelRemList(pixelRemPair);

      // Store valid inputs for re-visiting users
      localStorageUtils.setKey('baseFontSize', debouncedBaseFontSize);
      localStorageUtils.setKey('pixelRange', debouncedPixelRange);
    }
  }, [debouncedBaseFontSize, debouncedPixelRange]);

  return (
    <ConverterPage
      displayUnit={displayUnit}
      handleDisplayUnitChange={handleDisplayUnitChange}
      baseFontSize={baseFontSize}
      handleBaseFontSizeChange={handleBaseFontSizeChange}
      hasBaseFontSizeError={hasBaseFontSizeError}
      pixelRange={pixelRange}
      handlePixelRangeChange={handlePixelRangeChange}
      hasPixelRangeFormatError={hasPixelRangeFormatError}
      pixelRemList={pixelRemList}
      copyRemToClipboard={copyRemToClipboard}
    />
  );
};

export default Converter;
