import React, { useEffect, useState } from "react";
import CheckboxCard from "../checkbox-card/checkbox-card.component";
import * as S from "./denomination-notes-card.styles";
import { useFormContext } from "react-hook-form";
import CustomTextField from "../custom-text-field/custom-text-field.component";

const DenominationNotesCard = ({ denomination, slug, minAmount }) => {
  const minNotes = minAmount ? Math.floor(+minAmount / +denomination) : 0;
  const [checked, setChecked] = useState(false);
  const { setValue } = useFormContext();

  if (!denomination && !slug) return null;

  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) {
      setValue(`denominations.${slug}`, `${minNotes}`);
      return;
    }
    setValue(`denominations.${slug}`, "");
  };

  return (
    <S.Wrapper>
      <S.DenominationWrapper>
        <CheckboxCard
          description={`$${denomination}`}
          checked={checked}
          handleChecked={handleChecked}
        />
      </S.DenominationWrapper>
      <S.NotesWrapper>
        <CustomTextField
          keyboardType="number-pad"
          placeholderTextColor="#787878"
          placeholder="# of notes"
          name={`denominations.${slug}`}
          editable={checked}
          rules={{
            required: checked,
            min: minNotes,
          }}
        />
      </S.NotesWrapper>
    </S.Wrapper>
  );
};

export default DenominationNotesCard;
