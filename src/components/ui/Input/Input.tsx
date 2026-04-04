"use client";

import React, { useId, useState } from "react";
import styles from "./input.module.css";
import { InputProps } from "./types";
import clsx from "clsx";

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  maxLength,
  showCount = false,
  value,
  defaultValue,
  disabled,
  readOnly,
  className,
  prepend,
  append,
  ...props
}) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const isFilled = Boolean(currentValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    props.onChange?.(e);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.inputContainer, {
          [styles.focused]: false,
          [styles.error]: error,
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly,
        })}
      >
        <div className={styles.fieldWrapper}>
          <input
            id={id}
            className={styles.input}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            {...props}
          />

          <label
            htmlFor={id}
            className={clsx(styles.label, {
              [styles.floating]: isFilled,
            })}
          >
            {label}
          </label>
        </div>

      </div>

      <div className={styles.meta}>
        <span className={clsx(styles.helper, { [styles.errorText]: error })}>
          {error || helperText}
        </span>

        {showCount && maxLength && (
          <span className={styles.counter}>
            {String(currentValue).length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};