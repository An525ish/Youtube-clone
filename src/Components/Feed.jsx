import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
    const { loading, searchResults, mobileMenu } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)] bg-black">
            <LeftNav />
            <div className={`grow w-[calc(100%-240px)] ${ mobileMenu ? 'ml-[240px]' : ''} h-full bg-black text-white transition-all overflow-y-auto`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[calc(100vh-56px)] ${ !mobileMenu ? 'xl:grid-cols-4' : ''}  gap-y-8 gap-x-4 py-5 px-12 place-items-center`}>
                    {!loading &&
                        searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Feed;