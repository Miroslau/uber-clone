import { ScrollView, View, Image, Text } from "react-native";
import { images } from "@/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormSignUp } from "@/types/auth.interface";
import { AuthFields } from "@/app/(auth)/auth-fields/auth-fields";
import CustomButton from "@/components/custom-button";
import { Link } from "expo-router";
import OAuth from "@/components/o-auth/o-auth";

const SignUp = () => {
  const { handleSubmit, reset, control } = useForm<IAuthFormSignUp>({
    mode: "onChange",
  });

  const signUpSubmit: SubmitHandler<IAuthFormSignUp> = (data) => {
    console.log("data: ", data);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <AuthFields control={control} />
          <CustomButton
            title="Sign Up"
            className="mt-6"
            onPress={handleSubmit(signUpSubmit)}
          />

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
