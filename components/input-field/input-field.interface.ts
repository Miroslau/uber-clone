import {
  Control,
  FieldName,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { TextInputProps } from "react-native";

export interface IField<T extends FieldValues>
  extends Omit<TextInputProps, "onChange" | "onChangeText" | "value"> {
  control: Control<T>;
  name: FieldName<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
}
