import { HoldType } from 'modules/types/holdType';

export interface RouteType {
  id: number;
  name: string;
  setGrade: string;
  avgGrade: string;
  repeats: number;
  setter: string;
  dateSet: string;
  route: HoldType[];
}
