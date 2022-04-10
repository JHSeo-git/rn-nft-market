import { NFTData } from './dummy';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type NFTDataItem = ArrayElement<typeof NFTData>;
export type NFTDataBid = ArrayElement<NFTDataItem['bids']>;
