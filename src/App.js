import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DyingInsideImage from "./images/ballpit-dying_inside.jpg";
import url from "./sound/from_the_start.mp3";
import useSound from "use-sound";

export default function App() {
    const alignCenter = { display: "flex", alignItems: "center" };
    const [unClicked, Click] = React.useState(true);
    const [play] = useSound(url, { volume: 0.25 });

    return (
        <div>
            <Parallax pages={5}>
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
                    className="flex items-center"
                >
                    <p className="ml-auto mr-11 text-[1.6vw]">
                        It's been a hell of a year huh... <br />
                        Sometimes it feels like an eternity in class
                        <br /> but sometimes it just zooms past you
                        <br />
                        Now that 7B is coming to a close
                        <br /> Let's not forget the memories we've made{" "}
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
                    sticky={{ start: 1, end: 3 }}
                    // style={{ ...alignCenter, justifyContent: "flex-start" }}
                    className="flex items-center justify-start"
                >
                    <div className="m-20">
                        <p>I'm a sticky layer</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    sticky={{ start: 1, end: 1 }}
                    speed={4}
                    style={{ ...alignCenter, justifyContent: "flex-end" }}
                >
                    <div>
                        <p>I'm not</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: "flex-end" }}
                >
                    <div>
                        <p>Neither am I</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
