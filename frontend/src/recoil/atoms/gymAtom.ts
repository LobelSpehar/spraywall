import { RouteType } from 'modules/types';
import { atom } from 'recoil';

export const gymAtom = atom<[] | Array<RouteType>>({
  key: 'gymAtom',
  default: [],
});
