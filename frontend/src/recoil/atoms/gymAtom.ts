import { RouteType } from 'modules/types';
import { atom } from 'recoil';

export const gymAtom = atom<[] | Array<any>>({
  key: 'gymAtom',
  default: [],
});
