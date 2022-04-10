import { NFTDataItem } from '../constants/types';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    data?: NFTDataItem;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
