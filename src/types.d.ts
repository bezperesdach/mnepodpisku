/* eslint-disable no-unused-vars */
interface Window {
  gtag: UniversalAnalytics.ga | undefined;
  CopyToClipboard: (text: string) => Promise<{ copySuccess: boolean }>;
  ym: (id: number, goal: string, goalName: string) => void;
}
