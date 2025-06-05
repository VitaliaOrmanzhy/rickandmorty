import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { fetchSingleCharacter } from "../../api/api";
import { Profile } from "./Profile/Profile";
import { getProfileFields } from "../../utils/getProfileFields";
import { Button } from "../Button/Button";
import { ProfileType } from "../../types/types";

export const InfoPage = () => {
  const { id } = useParams();
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<ProfileType | undefined>({
    queryFn: () => fetchSingleCharacter(id),
    queryKey: ["character", id],
  });

  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const fields = getProfileFields(profile?.data);

  return (
    <div className="info-page">
      <Button
        label="go back"
        className={
          "back-button flex absolute left-[-20px] font-bold items-center gap-[10px] uppercase text-lg"
        }
        handleClick={handleClick}
      />
      <Profile
        profile={profile?.data}
        isLoading={isLoading}
        error={error}
        fields={fields}
      />
    </div>
  );
};
