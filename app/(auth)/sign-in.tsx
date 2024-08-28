import { View, Text, ScrollView, Image } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormSignIn } from "@/types/auth.interface";
import { images } from "@/constants";
import { SignInFields } from "@/app/(auth)/auth-fields/auth-fields";
import CustomButton from "@/components/custom-button";
import OAuth from "@/components/o-auth/o-auth";
import { Link } from "expo-router";

const SignUp = () => {
  const { handleSubmit, reset, control } = useForm<IAuthFormSignIn>({
    mode: "onChange",
  });

  const signUpSubmit: SubmitHandler<IAuthFormSignIn> = (data) => {
    console.log("data: ", data);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <SignInFields control={control} />
          <CustomButton
            title="Sign In"
            className="mt-6"
            onPress={handleSubmit(signUpSubmit)}
          />

          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
