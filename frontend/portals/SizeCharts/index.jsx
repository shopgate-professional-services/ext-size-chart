import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import SizeChart from './components/SizeChart';
import connect from './connector';

/**
 * SizeCharts component.
 * @return {JSX}
 */
const SizeCharts = ({ sizeCharts }) => {
  if (!sizeCharts || !sizeCharts.length) {
    return null;
  }

  return (
    <div>
      {sizeCharts.map(sizeChart => <SizeChart key={sizeChart.label} config={sizeChart} />)}
    </div>
  );
};

SizeCharts.propTypes = {
  sizeCharts: PropTypes.arrayOf(PropTypes.shape()),
};

SizeCharts.defaultProps = {
  sizeCharts: null,
};

export default withCurrentProduct(connect(SizeCharts));
