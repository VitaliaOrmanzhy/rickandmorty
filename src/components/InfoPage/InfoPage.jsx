import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { fetchSingleCharacter } from "../../api/api";
import { Profile } from "./Profile/Profile";
import { getProfileFields } from "../../utils/getProfileFields";
import { Button } from "../Button/Button";

export const InfoPage = () => {
  const { id } = useParams("id");
  const { data, isLoading } = useQuery({
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

  let fields;
  fields = getProfileFields(data?.data);

  return (
    <div className="info-page">
      <Button
        label="go back"
        className={
          "back-button flex absolute left-[-20px] font-bold items-center gap-[10px] uppercase text-lg"
        }
        handleClick={handleClick}
      />
      <Profile profile={data?.data} isLoading={isLoading} fields={fields} />
    </div>
  );
};
