import React from "react";
import { imagePlaceholder } from "../../../constants/constants";
import Skeleton from "react-loading-skeleton";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { CharacterType, ProfileFieldsType } from "../../../types/types";

interface ProfileProps {
  profile: CharacterType | undefined;
  error: Error | null;
  fields: ProfileFieldsType;
  isLoading: boolean;
}

export const Profile: React.FC<ProfileProps> = ({
  profile,
  error,
  fields,
  isLoading,
}) => {
  debugger;
  if (error)
    return (
      <div className="profile max-w-[400px] m-auto flex items-center justify-center min-h-screen">
        {error && <ErrorMessage message={error.message} />}
      </div>
    );

  return (
    <div className="profile max-w-[400px] ml-auto mr-auto">
      {isLoading ? (
        <Skeleton circle width={300} height={300} />
      ) : (
        <img
          src={profile?.image ? profile?.image : imagePlaceholder}
          className="rounded-[50%] ml-auto mr-auto"
          alt=""
        />
      )}

      <p className="text-center text-5xl mt-[5px]">
        {isLoading ? <Skeleton /> : profile?.name}
      </p>
      <div className="details text-left m-[15px]">
        <h3 className="text-center m-[10px] text-xl text-[#8E8E93] font-medium">
          Informations
        </h3>
        <ul>
          {fields.map((item) => (
            <li
              className="mt-0 mb-0 pt-[5px] mr-[15px] ml-[15px] pb-[5px] border-b border-[#21212114]"
              key={item.label}
            >
              <h4 className="text-large font-bold">
                {isLoading ? <Skeleton /> : item.label}
              </h4>
              <p className="text-sm text-[#8E8E93]">
                {isLoading ? <Skeleton /> : item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
