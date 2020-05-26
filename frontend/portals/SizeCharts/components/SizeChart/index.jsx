import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink } from '@shopgate/engage/components';
import InfoOutline from '@shopgate/pwa-ui-shared/icons/InfoOutlineIcon';

/**
 * SizeChart component.
 * @return {JSX}
 */
const SizeChart = ({ config }) => {
  if (!config.link || !config.label) {
    return null;
  }

  return (
    <ButtonLink href={config.link}>
      <div style={{ display: 'flex' }}>
        <span style={{ marginRight: '5px' }}>{config.label}</span>
        <InfoOutline size={24} />
      </div>
    </ButtonLink>
  );
};

SizeChart.propTypes = {
  config: PropTypes.shape().isRequired,
};

export default SizeChart;
