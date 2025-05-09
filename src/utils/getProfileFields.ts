import { CharacterType, ProfileFieldsType } from "../types/types";
import { checkUnknown } from "./checkUnknown";

export const getProfileFields = (profile: CharacterType | undefined): ProfileFieldsType => {
  return [
    { label: "Gender", value: checkUnknown(profile?.gender) },
    { label: "Status", value: checkUnknown(profile?.status) },
    { label: "Specie", value: checkUnknown(profile?.species) },
    { label: "Origin", value: checkUnknown(profile?.origin?.name) },
    { label: "Type", value: checkUnknown(profile?.type) },
  ];
};
