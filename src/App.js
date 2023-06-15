import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useSound from "use-sound";
import Typewriter from "typewriter-effect";

// Components

import Footer from "./components/Footer.js";

// Images

import DyingInsideImage from "./images/ballpit-dying_inside.jpg";
import GokartSeflie from "./images/gokartselfie-kimmy_chloe.jpg";
import BallpitIdk from "./images/ballpit-idk.jpg";
import BallpitIdk2 from "./images/ballpit-idk2.jpg";
import BallpitKivlan from "./images/ballpit-kivlan.jpg";
import BallpitKylaChloe from "./images/ballpit-kyla_chloe.jpg";
import BallpitRichard from "./images/ballpit-richard.jpg";
import Ballpit2Chloe from "./images/ballpit2-chloe_kimmy.jpg";
import SelfieChloeKimberly from "./images/selfie-chloe_kimberly.jpg";
import GoKart from "./images/gokart.png";
import WaterTemple1 from "./images/watertemple_chloe_audrey_abigail_kyla_elena.jpg";
import WaterTemple2 from "./images/watertemple2_chloe_audrey_abigail_kyla_elena.jpg";
import BallpitEveryone from "./images/ballpit-everyone.jpg";

// Sound

import music from "./sound/from_the_start.mp3";

export default function App() {
    const [unClicked, Click] = React.useState(true);
    const [play] = useSound(music, { volume: 0.1 });

    return (
        <div>
            <Parallax pages={13.5}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    // style={{ ...alignCenter, justifyContent: "center" }}
                    className="flex items-center justify-center flex-col"
                >
                    <p className="text-[5vw]">7B(roken)</p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    // style={{ ...alignCenter, justifyContent: "center" }}
                    className="flex items-center justify-end pr-[6vw]"
                >
                    <p className="text-[1.6vw]">
                        It's been a hell of a year huh... <br />
                        Sometimes it feels like an eternity in class
                        <br /> but sometimes it just zooms past you
                        <br />
                        Now that 7B is coming to a close
                        <br /> Let's not forget the memories we've made
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    // style={{ ...alignCenter, justifyContent: "center" }}
                    className="flex items-center pl-[10%] relative"
                >
                    <img
                        src={DyingInsideImage}
                        className="w-[30%] rounded-3xl"
                        alt="dying inside"
                    />
                    {unClicked && (
                        <button
                            className="text-[2vw] hover:text-[2.5vw] text-white ml-[2vw] z-99 absolute text-center hover:animate-bounce "
                            id="btn"
                            onClick={() => {
                                play();
                                Click(false);
                            }}
                        >
                            Click for a surprise
                        </button>
                    )}
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1, end: 1.5 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    className="flex items-center justify-start"
                >
                    <div className="m-20 text-[2vw]">
                        <p>
                            Like all of these!
                            <br />
                            Unforgettable memories that
                            <br />
                            we will never forget
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <img
                        src={GokartSeflie}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.75}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw] "
                >
                    <img
                        src={BallpitIdk}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 2, end: 3 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    className="flex items-center justify-start"
                >
                    <div className="m-20 text-[2vw]">
                        <p>
                            Remember the ballpit?
                            <br />
                            It was a whole lot of fun huh?
                            <br />
                            After all we're just overgrown children
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw] "
                >
                    <img
                        src={BallpitIdk2}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw] "
                >
                    <img
                        src={BallpitKylaChloe}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <div className=" text-[2vw]">
                        <p>
                            F in the chat for Kivlan
                            <br />
                            idek what the hell is happening ngl
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex items-center justify-start ml-[5vw] "
                >
                    <img
                        src={BallpitKivlan}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <div className="text-[2vw]">
                        <p>
                            Look at him!
                            <br />
                            He's having so much fun!
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex animate-pulse items-center justify-start ml-[5vw] "
                >
                    <img
                        src={BallpitRichard}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 6, end: 7 }}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <p className="text-[2vw]">
                        As you may have noticed <br />
                        These two are inseperable <br />
                        (kimmy wasn't having it in <br />
                        the second photo lmao)
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={6}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex animate-pulse items-center justify-start ml-[5vw] "
                >
                    <img
                        src={Ballpit2Chloe}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={7}
                    speed={1}
                    className="flex items-center justify-start ml-[5vw] "
                >
                    <img
                        src={SelfieChloeKimberly}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={8}
                    speed={1}
                    className="flex items-center justify-center"
                >
                    <p className="text-[2vw]">
                        Gokart was also fun as hell! (Elena has skill isu tbh)
                    </p>
                    <img
                        className="w-[40vw] "
                        src={GoKart}
                        alt="Car go zoom zoom"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 9, end: 10 }}
                    speed={1}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <div className=" text-[2vw]">
                        <p>
                            Forbidden Temple 🏞🌊 thing was also pretty fun...
                            <br />
                            but some people got splashed (cough cough Chloe)
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={9}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex items-center justify-start ml-[5vw] "
                >
                    <img
                        src={WaterTemple1}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={10}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex items-center justify-start ml-[5vw] "
                >
                    <img
                        src={WaterTemple2}
                        className="w-[30%] animate-bounce rounded-3xl"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={11}
                    speed={1}
                    className="flex items-center justify-center"
                >
                    <p className="text-[4vw]">
                        So, as the school year comes to a close...
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={11.5}
                    speed={1}
                    className="flex items-center justify-center"
                >
                    <p className="text-[4vw]">
                        And we all are gonna move on with our lives
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={11.9}
                    speed={1}
                    className="flex items-center justify-center"
                >
                    <p className="text-[4vw]">All I want to say is...</p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={12.5}
                    speed={1}
                    className="flex items-center justify-center flex-col"
                >
                    <img
                        src={BallpitEveryone}
                        className="bg-cover bg-center rounded-full max-w-xxl mb-5"
                        alt="idk man"
                    />
                    {/* <p className="text-[4vw]">Thanks for the memories</p> */}
                    {}
                    <Typewriter
                        className="text-9xl"
                        options={{
                            strings: [
                                "Thanks for the memories!",
                                "I'll always remember yall.",
                                "Sincerely, Richard",
                            ],
                            autoStart: true,
                            loop: true,
                            cursor: "|",
                            skipAddStyles: true,
                        }}
                    />
                </ParallaxLayer>
            </Parallax>

            <Footer />
        </div>
    );
}
