import { connect } from 'react-redux';
import { getSizeChartsForCurrentProduct } from './selectors';

/**
 * @param {Object} state The current application state.
 * @param {Object} props props
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  sizeCharts: getSizeChartsForCurrentProduct(state, props),
});

/**
 * @return {Object}
 */
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps);
