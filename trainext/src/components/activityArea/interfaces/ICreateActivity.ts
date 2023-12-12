export interface ICreateActivity {
  activity: string;
  date: Date | string | null;
  time: string | Date | null;
  status: string;
  duration: string | null;
}
