import { checkUnknown } from "./checkUnknown";

export const getProfileFields = (profile) => {
  return [
    { label: "Gender", value: checkUnknown(profile?.gender) },
    { label: "Status", value: checkUnknown(profile?.status) },
    { label: "Specie", value: checkUnknown(profile?.species) },
    { label: "Origin", value: checkUnknown(profile?.origin?.name) },
    { label: "Type", value: checkUnknown(profile?.type) },
  ];
};
