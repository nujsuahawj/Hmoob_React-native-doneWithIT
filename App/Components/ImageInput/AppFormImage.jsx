import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../Forms/ErrorMessage";
import ListImages from "./ImageInputList";

function AppFormImage({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ListImages
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]}  />
    </>
  );
}
export default AppFormImage