export enum SCREENS {
  WELCOME = 'WELCOME',
  QUESTION = 'QUESTION',
  FEEDBACK = 'FEEDBACK',
}

export type RootStackParamList = {
  [SCREENS.WELCOME]: undefined
  [SCREENS.QUESTION]: undefined
  [SCREENS.FEEDBACK]: { responses: Array<string> }
}
