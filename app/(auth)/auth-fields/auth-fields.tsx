import { Control } from "react-hook-form";
import { IAuthFormSignUp } from "@/types/auth.interface";
import { FC } from "react";
import { icons } from "@/constants";
import InputField from "@/components/input-field/input-field";
import { validEmail } from "@/app/(auth)/auth-fields/email.regex";

interface IAuthFields {
  control: Control<IAuthFormSignUp>;
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
  return (
    <>
      <InputField<IAuthFormSignUp>
        label="Name"
        placeholder="Enter name"
        icon={icons.person}
        control={control}
        name="name"
        rules={{
          required: "Name is required",
        }}
        keyboardType="default"
      />
      <InputField<IAuthFormSignUp>
        label="Email"
        placeholder="Enter email"
        control={control}
        name="email"
        icon={icons.email}
        rules={{
          required: "Email is required",
          pattern: {
            value: validEmail,
            message: "Please enter a valid email address",
          },
        }}
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <InputField<IAuthFormSignUp>
        label="Password"
        placeholder="Enter password"
        control={control}
        icon={icons.lock}
        textContentType="password"
        secureTextEntry
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password should be minimum 6 characters long",
          },
        }}
      />
    </>
  );
};

export default AuthFields;
