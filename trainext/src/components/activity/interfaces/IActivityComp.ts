import { IActivityInfo } from './IActivityInfo';
import { IActivityButtons } from './IActivityButtons';
// Types
//import {ActivityType} from "../../../context/interfaces/IFormContext";

export interface IActivityComp
  extends IActivityInfo,
    IActivityButtons {
  id?: string;
  status?: string;
}
