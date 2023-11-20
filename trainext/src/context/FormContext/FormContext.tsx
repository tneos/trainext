import React, {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useReducer,
} from 'react';

//Enums
import { Activity } from '../../components/createActivityForm/enums/Activity';
import { Status } from '../../components/createActivityForm/enums/Status';
import {
  activityReducer,
  ActivityActionType,
} from './reducers';

// Types
export type StatusType =
  | Status.planned
  | Status.started
  | Status.completed;

export type ActivityType =
  | Activity.cycling
  | Activity.rowing
  | Activity.running
  | Activity.swimming
  | Activity.walking;

type InitialStateType = {
  activity: ActivityType;
  date: Date | null;
  time: Date | string | null;
  status: StatusType;
  duration: string | null;
  updated: boolean;
  notValid: boolean;
  isLoading: boolean;
  isSuccess: boolean;
};

const initialState = {
  activity: Activity.walking,
  date: new Date(),
  time: 'hh:mm',
  status: Status.planned,
  duration: 'hh:mm',
  updated: false,
  isLoading: false,
  notValid: false,
  isSuccess: false,
};

export const FormContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ActivityActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const FormContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [state, dispatch] = useReducer(
    activityReducer,
    initialState,
  );

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
