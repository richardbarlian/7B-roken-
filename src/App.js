import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
import url from "./sound/from_the_start.mp3";
import useSound from "use-sound";

export default function App() {
    const alignCenter = { display: "flex", alignItems: "center" };
    const [unClicked, Click] = React.useState(true);
    const [play] = useSound(url, { volume: 0.1 });

    return (
        <div>
            <Parallax pages={13}>
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
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                    {unClicked && (
                        <button
                            className="text-[2vw] hover:text-[2.5vw] text-white ml-[2vw] z-99 absolute text-center animate-bounce"
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
                    sticky={{ start: 1, end: 2 }}
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
                    sticky={{ start: 1, end: 1 }}
                    speed={4}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <img
                        src={GokartSeflie}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    sticky={{ start: 2, end: 2 }}
                    speed={4}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <img
                        src={BallpitIdk}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 3, end: 5 }}
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
                    offset={1}
                    sticky={{ start: 4, end: 4 }}
                    speed={4}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <img
                        src={BallpitIdk2}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    sticky={{ start: 5, end: 5 }}
                    speed={4}
                    className="flex items-center justify-end pr-[10vw]"
                >
                    <img
                        src={BallpitKylaChloe}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    sticky={{ start: 6, end: 6 }}
                    speed={4}
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
                    sticky={{ start: 6, end: 6 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex items-center justify-start ml-[5vw]"
                >
                    <img
                        src={BallpitKivlan}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    sticky={{ start: 7, end: 7 }}
                    speed={4}
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
                    sticky={{ start: 7, end: 7 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex animate-pulse items-center justify-start ml-[5vw]"
                >
                    <img
                        src={BallpitRichard}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    sticky={{ start: 8, end: 9 }}
                    speed={4}
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
                    sticky={{ start: 8, end: 8 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex animate-pulse items-center justify-start ml-[5vw]"
                >
                    <img
                        src={Ballpit2Chloe}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 9, end: 9 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    speed={1}
                    className="flex items-center justify-start ml-[5vw]"
                >
                    <img
                        src={SelfieChloeKimberly}
                        className="w-[30%] animate-bounce"
                        alt="dying inside"
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={10}
                    speed={1}
                    className="flex items-center justify-center"
                >
                    <p className="text-[2vw]">
                        Gokart was also fun as hell! (Elena has skill isu tbh)
                    </p>
                    <img className="w-[40vw] " src={GoKart} alt="Car go zoom zoom" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
