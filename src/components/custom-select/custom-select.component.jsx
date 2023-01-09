import React, { useState } from "react";
import * as S from "./custom-select.styles";
import { Controller, useFormContext } from "react-hook-form";
import { getRHFErrorMessage } from "../../utils/utils";

const CustomSelect = ({
  options,
  onChange,
  itemLabelKey,
  itemValueKey,
  name,
  rules,
  defaultValue,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? "");

  const {
    control,
    formState: { errors },
    // clearErrors,
  } = useFormContext() ?? { formState: { errors: {} } };

  if (!control) {
    return (
      <S.Wrapper>
        <S.CustomSelect
          open={open}
          value={value}
          items={options}
          setOpen={setOpen}
          setValue={setValue}
          onChangeValue={handleChange}
          schema={{
            label: itemLabelKey,
            value: itemValueKey,
            disabled: "disabled",
          }}
          {...props}
        />
      </S.Wrapper>
    );
  }

  const error = getRHFErrorMessage(errors, name);

  const handleChange = (value, controlledChange) => {
    // console.log("value :>> ", value);
    controlledChange && controlledChange(value);
    // if (value) clearErrors(name);
    onChange && onChange(value);
  };

  return (
    <S.Wrapper>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <S.CustomSelect
            open={open}
            value={value}
            items={options}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={(val) => handleChange(val, onChange)}
            schema={{
              label: itemLabelKey,
              value: itemValueKey,
              disabled: "disabled",
            }}
            {...props}
          />
        )}
      />
      {error && <S.Error variant="error">{error ?? "Error."}</S.Error>}
    </S.Wrapper>
  );
};

export default CustomSelect;
