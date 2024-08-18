import { ScrollView, View, Image, Text } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/input-field/input-field";
import { useForm } from "react-hook-form";
import { IAuthFormData, IAuthFormSignUp } from "@/types/auth.interface";
import AuthFields from "@/app/(auth)/auth-fields/auth-fields";

const SignUp = () => {
  const { handleSubmit, reset, control } = useForm<IAuthFormSignUp>({
    mode: "onChange",
  });

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
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
