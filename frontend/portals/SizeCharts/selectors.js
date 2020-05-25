import { createSelector } from 'reselect';
import { getCurrentProduct } from '@shopgate/engage/product';
import { charts } from '../../config';

export const getSizeChartsForCurrentProduct = createSelector(
  getCurrentProduct,
  (product) => {
    if (!product || !product.tags.length) {
      return [];
    }

    const chartsToDisplay = charts
      .filter(({ triggerTags }) =>
        triggerTags.some(triggerTag => product.tags.includes(triggerTag)));

    return chartsToDisplay;
  }
);
