import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import VideoLength from "../shared/VideoLength"

const VideoCard = ({ video }) => {
  return (
    <Link to={`video/${video?.videoId}`}>
      <div className='flex flex-col'>
        <div className='h-44 md:h-48 relative md:rounded-xl'>
          <img src={video?.thumbnails?.[0].url} alt="img" className='rounded-xl h-full w-full overflow-hidden object-cover' />
          <div>
            {
              video?.lengthSeconds && (<VideoLength time={video?.lengthSeconds} />)
            }
          </div>
        </div>
        <div className='py-3 flex gap-3 '>
          <div>
            <div className='w-10 h-10 overflow-hidden rounded-full'>
              <img
                className="h-full w-full object-cover "
                src={video?.author?.avatar[0]?.url}
              />
            </div>
          </div>
          <div className='flex flex-col ml-3 overflow-hidden '>
            <span className="text-md font-[500] line-clamp-2">
              {video?.title}
            </span>
            <span className='flex items-center text-[14px] text-white/[0.7] gap-1'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type ===
                "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.7] text-[12px] ml-1" />
                )}
            </span>
            <div className="flex text-[14px] text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(
                video?.stats?.views,
                2
              )} views`}</span>
              <span className="flex text-[24px] leading-none  text-white/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">
                {video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}



export default VideoCard