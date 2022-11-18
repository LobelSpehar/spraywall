import { HoldType } from 'modules/types';
import { atom } from 'recoil';

export const routeAtom = atom<HoldType[] | []>({
  key: 'routeAtom',
  default: [],
});
