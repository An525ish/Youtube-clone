import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format(`${time > '3600' ? 'HH:mm:ss' : 'mm:ss'}`);
    return (
        <span className="absolute bottom-2 right-2 bg-black/[0.8] py-1 px-2 text-white text-xs rounded-md">
            {videoLengthInSeconds}
        </span>
    );
};

export default VideoLength;