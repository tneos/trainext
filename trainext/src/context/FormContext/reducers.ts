import { Activity } from './../../components/createActivityForm/enums/Activity';
import { Status } from '../../components/createActivityForm/enums/Status';

export enum Types {
  OptionActivitySelect = 'SELECT_ACTIVITY_OPTION',
  OptionStatusSelect = 'SELECT_STATUS_OPTION',
  DateSelect = 'SELECT_DATE',
  AddTime = 'ADD_TIME',
  AddDuration = 'ADD_DURATION',
  Update = 'UPDATE',
  IsLoading = 'IS_LOADING',
  Success = 'SUCCESS',
  NotValid = 'NOT_VALID',
}

type StatusType =
  | Status.planned
  | Status.started
  | Status.completed;

type ActivityType =
  | Activity.cycling
  | Activity.rowing
  | Activity.running
  | Activity.swimming
  | Activity.walking;

export type ActivityActionType =
  | {
      type: Types.OptionActivitySelect;
      payload: ActivityType | string;
    }
  | {
      type: Types.OptionStatusSelect;
      payload: StatusType | string;
    }
  | { type: Types.DateSelect; payload: Date | null }
  | { type: Types.AddTime; payload: Date | string | null }
  | {
      type: Types.AddDuration;
      payload: Date | string | null;
    }
  | {
      type: Types.Update;
      payload: boolean;
    }
  | {
      type: Types.IsLoading;
      payload: boolean;
    }
  | {
      type: Types.NotValid;
      payload: boolean;
    }
  | {
      type: Types.Success;
      payload: boolean;
    };

type ActivityFormType = {
  activity: ActivityType;
  date: Date;
  time: Date | string | null;
  status: StatusType;
  duration: Date | string | null;
  update: boolean;
  isLoading: boolean;
  notValid: boolean;
  success: boolean;
};

export const activityReducer = (
  state: ActivityFormType,
  action: ActivityActionType,
): any => {
  switch (action.type) {
    case Types.OptionActivitySelect:
      return {
        ...state,
        activity: action.payload,
      };

    case Types.OptionStatusSelect:
      return {
        ...state,
        status: action.payload,
      };

    case Types.DateSelect:
      return {
        ...state,
        date: action.payload,
      };

    case Types.AddTime:
      return {
        ...state,
        time: action.payload,
      };
    case Types.AddDuration:
      return {
        ...state,
        duration: action.payload,
      };
    case Types.Update:
      return {
        ...state,
        updated: action.payload,
      };
    case Types.IsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Types.NotValid:
      return {
        ...state,
        notValid: action.payload,
      };
    case Types.Success:
      return {
        ...state,
        isSuccess: action.payload,
      };

    default:
      return state;
  }
};
