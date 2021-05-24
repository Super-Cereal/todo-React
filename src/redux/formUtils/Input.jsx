import React from "react";

export const Input = ({ input: inp, meta, placeholder, className, id, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className="FormMoveableText-Block">
      <input {...inp} {...props} className={`${className}`} />
      <label className="FormMoveableText-Label fontType_subhead fontColor_gray" htmlFor={id}>
        {placeholder}
      </label>
      {/* {hasError ? (
        <span className={hasError ? "Ahtung Ahtung_error" : undefined}>{meta.error}</span>
      ) : undefined} */}
    </div>
  );
};
