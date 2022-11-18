import { HoldType } from 'modules/types';
import { atom } from 'recoil';

export const gymAtom = atom<
  [] | Array<{ id: number; grade: string; setter: string; route: HoldType[] }>
>({
  key: 'gymAtom',
  default: [],
});
