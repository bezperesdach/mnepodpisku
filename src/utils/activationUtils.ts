export const activationTypesNames = ["ps_ea_play", "ps_plus", "psn_balance", "psn_account"] as const;

export const activationTypes: Record<ActivationTypes, string> = activationTypesNames.reduce((acc, command) => {
  acc[command] = command;
  return acc;
}, {} as Record<ActivationTypes, string>);

export type ActivationTypes = (typeof activationTypesNames)[number];

export const verifyActivationType = (activationType: string): activationType is ActivationTypes => {
  return activationTypesNames.includes(activationType as ActivationTypes);
};
