import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedbackBase,
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
} from "react-native";
import { IField } from "@/components/input-field/input-field.interface";
import { Controller } from "react-hook-form";

const InputField = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  label,
  labelStyle,
  containerStyle,
  icon,
  iconStyle,
  inputStyle,
  secureTextEntry,
  ...props
}: IField<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View className="my-2 w-full">
                <Text
                  className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}
                >
                  {label}
                </Text>
                <View
                  className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
                >
                  {icon && (
                    <Image
                      source={icon}
                      className={`w-6 h-6 ml-4 ${iconStyle}`}
                    />
                  )}
                  <TextInput
                    autoCapitalize="none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={(value || "").toString()}
                    placeholderTextColor="#6a6a6a"
                    className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                    secureTextEntry={secureTextEntry}
                    {...props}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          {error && <Text className="text-red-500">{error.message}</Text>}
        </>
      )}
    />
  );
};

export default InputField;
