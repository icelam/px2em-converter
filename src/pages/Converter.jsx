import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import {
  AppTitle, InputGroup, Remarks, FlexTable, PixelRemPair, Switch
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

const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubHeading = styled.h2`
  margin: 0;
`;

const Converter = ({
  displayUnit,
  handleDisplayUnitChange,
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

  const unitOptions = useMemo(() => [
    { label: intl.formatMessage({ id: 'unit.em' }), value: 'em' },
    { label: intl.formatMessage({ id: 'unit.rem' }), value: 'rem' }
  ], [intl]);

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
    const remWithUnit = `${rem}${displayUnit === 'rem'
      ? intl.formatMessage({ id: 'unit.rem' })
      : intl.formatMessage({ id: 'unit.em' })
    }`;

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
  }), [displayUnit, pixelRemList, copyRemToClipboard, intl]);

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
      <SectionHead>
        <SubHeading>{intl.formatMessage({ id: 'converter.result.title' })}</SubHeading>
        <Switch
          onChange={handleDisplayUnitChange}
          value={displayUnit}
          options={unitOptions}
          label={intl.formatMessage({ id: 'converter.setting.displayUnit' })}
          buttonWidth="3.5rem"
        />
      </SectionHead>
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
  displayUnit: PropTypes.oneOf(
    ['em', 'rem']
  ).isRequired,
  handleDisplayUnitChange: PropTypes.func.isRequired,
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
