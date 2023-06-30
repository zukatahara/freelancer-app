import Image from "next/image";
import styles from "./page.module.css";
import MenuComponent from "@/components/pages/Home/Menu";
import BannerComponent from "@/components/pages/Home/Banner";
import UsedByComponent from "@/components/pages/Home/UsedBy";
import CompleteWorkComponent from "@/components/pages/Home/CompleteWork";
import GoodWhat from "@/components/pages/Home/GoodWhat";
import LastSectionComponent from "@/components/pages/Home/LastSection";
import PlacePostComponent from "@/components/pages/Home/PlacePost";

export default function Home() {
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
