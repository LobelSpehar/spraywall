import { HoldType } from 'modules/types/holdType';

export interface RouteType {
  id: number;
  name: string;
  setGrade: number;
  avgGrade: number;
  repeats: number;
  setter: string;
  dateSet: string;
  route: HoldType[];
}
