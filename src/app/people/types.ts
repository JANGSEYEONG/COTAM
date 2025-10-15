export const POSITION = {
  LEADER: 'leader',
  MANAGER: 'manager',
  USER: 'user',
} as const;

// 스터디원 리스트 정렬 순서
export const POSITION_PRIORITY = {
  [POSITION.LEADER]: 1,
  [POSITION.MANAGER]: 2,
  [POSITION.USER]: 3,
} as const;

export const JOB = {
  FRONTEND: 'Front-End',
  BACKEND: 'Back-End',
  FULLSTACk: 'Full-Stack',
  APP: 'App',
  DESIGNER: 'Designer',
  AI: 'AI',
  DEV_OPS: 'DevOps',
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
