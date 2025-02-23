import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

import Slider from "../components/Slider";
import Formpage from "../components/formpage";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EN LIBRARY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/LoGo.png" />
      </Head>
      <Hero
        heading="WELCOME  TO  EN  LIBRARY "
        message="Enjoy access to a wide selection conference room.
        Easy communication with your friends."
        buttonMess="Booking"
        buttonLink="/#aboutLibrary"
      />
      <Slider slides={SliderData} />
      <Formpage />
    </div>
  );
}
