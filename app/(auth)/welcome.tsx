import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/custom-button";
import { responsiveFontSize, textScale } from "@/utils/scaleSize";

const Welcome = () => {
  const screenWidth = Dimensions.get("window").width;
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  const scaleHeight = ({ source }: any) => {
    const { width, height } = Image.resolveAssetSource(source);
    const imageAspectRatio = width / height;

    return screenWidth / imageAspectRatio;
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        paginationStyle={{ bottom: -20 }}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => {
          const imgHeight = scaleHeight({
            source: item.image,
          });

          return (
            <View
              key={item.id}
              className={`flex items-center justify-center p-${screenWidth > 320 ? 5 : 0}`}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: screenWidth,
                  height: screenWidth > 320 ? imgHeight - 30 : imgHeight - 50,
                }}
              />
              <View
                className={`flex flex-row items-center justify-center w-full mt-${screenWidth > 320 ? 10 : 5}`}
              >
                <Text
                  className="text-black font-bold mx-10 text-center"
                  adjustsFontSizeToFit={true}
                  allowFontScaling={true}
                  style={{
                    fontSize: screenWidth > 320 ? textScale(25) : textScale(25),
                  }}
                >
                  {item.title}
                </Text>
              </View>
              <Text
                className="font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3"
                style={{
                  fontSize: screenWidth > 320 ? textScale(15) : textScale(10),
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        })}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  );
};

export default Welcome;
