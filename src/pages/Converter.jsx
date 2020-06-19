import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import {
  AppTitle, InputGroup, Remarks, FlexTable, PixelRemPair
} from '@components';

const FormWrapper = styled.div`
  margin: 2.5rem 0 2.5rem 0;
`;

const PixelRangeRemarks = styled(Remarks)`
  display: inline-block;
`;

const ResultTableWrapper = styled.div`
  margin: 1.875rem 0 0 0;
`;

const Converter = ({
  baseFontSize,
  handleBaseFontSizeChange,
  hasBaseFontSizeError,
  pixelRange,
  handlePixelRangeChange,
  hasPixelRangeFormatError,
  pixelRemList,
  copyRemToClipboard
}) => {
  const intl = useIntl();

  const pixelRangeLabel = useMemo(() => (
    <>
      {intl.formatMessage({ id: 'converter.input.pixelRange.label' })}
      {' '}
      <PixelRangeRemarks>
        {intl.formatMessage({ id: 'converter.input.pixelRange.formatHint' })}
      </PixelRangeRemarks>
    </>
  ), [intl]);

  const pixelRemTableData = useMemo(() => pixelRemList.map(({
    pixel, rem
  }) => {
    const pxWithUnit = `${pixel}${intl.formatMessage({ id: 'unit.px' })}`;
    const remWithUnit = `${rem}${intl.formatMessage({ id: 'unit.rem' })}`;

    return {
      key: `${pxWithUnit}-${remWithUnit}`,
      content: (
        <PixelRemPair
          pixel={pxWithUnit}
          rem={remWithUnit}
          copyToClipboard={copyRemToClipboard}
        />
      )
    };
  }), [pixelRemList, copyRemToClipboard, intl]);

  return (
    <>
      <AppTitle>{intl.formatMessage({ id: 'converter.title' })}</AppTitle>
      <p>{intl.formatMessage({ id: 'converter.description' })}</p>
      <FormWrapper>
        <InputGroup
          id="baseFontSize"
          label={intl.formatMessage({ id: 'converter.input.baseFontSize.label' })}
          placeholder={intl.formatMessage({ id: 'converter.input.baseFontSize.placeholder' })}
          inputValue={baseFontSize}
          onChange={handleBaseFontSizeChange}
          error={
            hasBaseFontSizeError
              ? intl.formatMessage({ id: 'converter.input.baseFontSize.errorMessage' })
              : ''
          }
          autoComplete="off"
          maxLength="15"
        />
        <InputGroup
          id="pixelRange"
          label={pixelRangeLabel}
          placeholder={intl.formatMessage({ id: 'converter.input.pixelRange.placeholder' })}
          inputValue={pixelRange}
          onChange={handlePixelRangeChange}
          error={
            hasPixelRangeFormatError
              ? intl.formatMessage({ id: 'converter.input.pixelRange.errorMessage' })
              : ''
          }
          autoComplete="off"
        />
      </FormWrapper>
      <h2>{intl.formatMessage({ id: 'converter.result.title' })}</h2>
      <ResultTableWrapper>
        <FlexTable
          data={pixelRemTableData}
          sm={1}
          md={2}
          lg={3}
          xl={4}
        />
      </ResultTableWrapper>
    </>
  );
};

Converter.propTypes = {
  baseFontSize: PropTypes.string.isRequired,
  handleBaseFontSizeChange: PropTypes.func.isRequired,
  hasBaseFontSizeError: PropTypes.bool.isRequired,
  pixelRange: PropTypes.string.isRequired,
  handlePixelRangeChange: PropTypes.func.isRequired,
  hasPixelRangeFormatError: PropTypes.bool.isRequired,
  pixelRemList: PropTypes.arrayOf(PropTypes.shape({
    pixel: PropTypes.number.isRequired,
    rem: PropTypes.number.isRequired
  })).isRequired,
  copyRemToClipboard: PropTypes.func.isRequired
};

export default memo(Converter);
