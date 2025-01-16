export const POSITION = {
  LEADER: 'leader',
  MANAGER: 'manager',
  USER: 'user',
} as const;

export const JOB = {
  FRONTEND: 'Front-End',
  BACKEND: 'Back-End',
  APP: 'App',
  DESIGNER: 'Designer',
} as const;

export const positionMap = {
  [POSITION.LEADER]: '스터디장',
  [POSITION.MANAGER]: '운영진',
  [POSITION.USER]: '스터디원',
} as const;

export type Position = (typeof POSITION)[keyof typeof POSITION];
export type Job = (typeof JOB)[keyof typeof JOB];

export interface Member {
  name: string;
  position: Position;
  job: Job;
  description: string;
  imageUrl: string | null;
}
