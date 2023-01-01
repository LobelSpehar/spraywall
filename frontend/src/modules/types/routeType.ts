import { HoldType } from 'modules/types/holdType';

export interface RouteType {
  id: string;
  name: string;
  grade: number;
  setter: string;
  date: string;
  user_uid: string;
  route: HoldType[];
}
