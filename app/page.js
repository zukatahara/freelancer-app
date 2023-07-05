"use client";
import BannerComponent from "@/components/pages/Home/Banner";
import UsedByComponent from "@/components/pages/Home/UsedBy";
import CompleteWorkComponent from "@/components/pages/Home/CompleteWork";
import GoodWhat from "@/components/pages/Home/GoodWhat";
import LastSectionComponent from "@/components/pages/Home/LastSection";
import PlacePostComponent from "@/components/pages/Home/PlacePost";
import { useCheckAuth } from "@/utils/useCheckAuth";
import React from "react";

export default function Home() {
  // const { user } = useCheckAuth();
  // console.log('user:', user)
  useCheckAuth();
  return (
    <>
      <BannerComponent />
      <UsedByComponent />
      <CompleteWorkComponent />
      <GoodWhat />
      {/* <PlacePostComponent /> */}
      <LastSectionComponent />
    </>
  );
}
