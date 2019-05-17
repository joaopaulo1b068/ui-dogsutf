import { CLICK_UPDATE_VALUE } from './action_types';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
  });