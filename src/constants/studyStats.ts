// 시작 날짜: 2023년 12월 1일
const START_DATE = new Date('2023-12-01');
const CURRENT_DATE = new Date();

// 경과 주 수 계산 (소수점 이하 버림)
const WEEKS_ELAPSED = Math.floor(
  (CURRENT_DATE.getTime() - START_DATE.getTime()) / (7 * 24 * 60 * 60 * 1000),
);

export const STUDY_MEMBERS_COUNT = 34;
export const ONLINE_STUDY_SESSIONS_COMPLETED = 4;
export const OFFLINE_STUDY_SESSIONS_COMPLETED = WEEKS_ELAPSED;

export const TOTAL_STUDY_SESSIONS =
  OFFLINE_STUDY_SESSIONS_COMPLETED + ONLINE_STUDY_SESSIONS_COMPLETED;
