import React, { useContext, useState, useEffect } from 'react'
import { fetchData } from '../utils/api'
import { useParams } from 'react-router-dom';
import { Context } from '../context/contextApi'
import ReactPlayer from 'react-player/youtube';
import { BsFillCheckCircleFill } from "react-icons/bs";
import SuggestionVideoCard from './SuggestionVideoCard'
import CommentsCard from './CommentsCard'
import { FiBell } from 'react-icons/fi'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { AiOutlineDislike, AiFillDislike } from 'react-icons/ai'
import { RxDividerVertical } from 'react-icons/rx'
import { TbShare3 } from 'react-icons/tb'
import { HiDownload } from 'react-icons/hi'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineSort } from 'react-icons/md'
import { abbreviateNumber } from "js-abbreviation-number";
import ReadMore from '../utils/Readmore'

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const [comments, setComments] = useState();
  const { setLoading } = useContext(Context)
  const { id } = useParams();

  const [like, setLike] = useState(false)
  const [dislike, setdisLike] = useState(false)

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails()
    fetchRelatedVideos()
    fetchRelatedComments()
  }, [id])

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
      setLoading(false);
    })
  }

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res);
      setLoading(false);
    })
  }

  const fetchRelatedComments = () => {
    setLoading(true);
    fetchData(`video/comments/?id=${id}`).then((res) => {
      setComments(res);
      setLoading(false);
    })
  }

  // const likes = abbreviateNumber(video?.stats?.views,2)
  // const [likeCount, setLikeCount] = useState(likes);

  const likeButton = (()=>{
    setLike(!like)
    // setLikeCount(likeCount+1)
    dislike && setdisLike(!dislike)
  })

  const disLikeButton = (()=>{
    setdisLike(!dislike)
    // setLikeCount(likeCount-1)
    like && setLike(!like)
  })

  return (
    <div className='bg-black text-white py-5 px-16 flex flex-col lg:flex-row w-full gap-4 font-[roboto]'>
      <div className='flex flex-col flex-1 '>
        <div className='h-[300px] md:h-[400px] xl:h-[550px] mt-4'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width='100%'
            height='100%'
            style={{ backgroundColor: '#000' }}
            playing={true}
          />
        </div>
        <div className='p-2'>
          <span className='text-lg font-bold'>
            {video?.title}
          </span>
          <div className='flex justify-between items-center mt-2'>
            <div className='flex gap-4 items-center'>
              <div className='flex gap-3 items-center'>
                <div className='w-10 h-10 '>
                  <img src={video?.author?.avatar[0]?.url} alt="img"
                    className='rounded-full object-cover' />
                </div>
                <div className='flex flex-col '>
                  <span className='font-semibold flex gap-1 items-center'>
                    <span>{video?.author?.title}</span>
                    <span>{video?.author?.badges[0]?.type ===
                      "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}</span> </span>
                  <span className='text-[13px] text-white/[0.8]'>
                    {video?.author?.stats?.subscribersText}
                  </span>
                </div>
              </div>
              <div className='border border-white/[.3] rounded-3xl px-4 hidden lg:block'>
                <button className='h-[33px]'>Join</button>
              </div>
              <div className='rounded-3xl px-4 bg-white/[0.15]'>
                <button className='h-[36px] font-semibold'>
                  <span className='flex items-center gap-2 '>
                    <FiBell className='text-xl' /> Subscribe
                  </span>
                </button>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='rounded-3xl px-4 bg-white/[0.15]'>
                <button className='h-[36px]  font-semibold'><span className='flex items-center'>
                  <button className='text-xl mr-2' onClick={likeButton}> {!like ? <AiOutlineLike /> : <AiFillLike />}
                  </button>
                  <span>{`${abbreviateNumber(
                    video?.stats?.views,
                    2
                  )} `}</span>
                  <span className=' text-white/[0.2] text-3xl'>
                    <RxDividerVertical /></span>
                  <button className='text-xl' onClick={disLikeButton}>{!dislike ? <AiOutlineDislike /> : <AiFillDislike />}</button>
                </span></button>
              </div>
              <div className='rounded-3xl px-4 bg-white/[0.15]'>
                <button className='h-[36px] font-semibold'><span className='flex items-center gap-2'><TbShare3 className='text-xl' />Share</span></button>
              </div>
              <div className='rounded-3xl px-4 bg-white/[0.15] hidden lg:block'>
                <button className='h-[36px] font-semibold'> <span className='flex items-center gap-2'><HiDownload className='text-xl' />Download</span> </button>
              </div>
              <div className='rounded-full px-2 bg-white/[0.15]'>
                <button className='h-[36px] '><BsThreeDots className='text-xl' /></button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='px-4 py-3 bg-white/[0.15] rounded-xl my-4'>
            <div className='flex gap-4 font-medium '>
              <span>{abbreviateNumber(video?.stats?.views, 2)} views</span>
              <span>{video?.publishedDate}</span>
            </div>
            <div className='w-fit text-[15px]'>
              <pre className=''>
                <ReadMore >
                  {video?.description}
                </ReadMore>
              </pre>
              <span>
                {video?.kewords}
              </span>
            </div>
          </div>
          <div className='flex gap-8 text-white/[0.8] my-4 px-4'>
            <span className='text-[17px] '>
              {comments?.totalCommentsCount} Comments
            </span>
            <span className='flex gap-2 font-semibold cursor-pointer'>
              <MdOutlineSort className='text-2xl' /> Sort by
            </span>
          </div>
          <div className='flex gap-4 p-4 items-center mb-6'>
            <div className='w-10 h-10 rounded-full overflow-hidden'>
              <img src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1684310014~exp=1684310614~hmac=631535f9076417361e43f12771b25eb7e54b768dbd5ef8f090fb4dff73120c1a" alt="avatar" />
            </div>
            <div className='w-full'>
              <span className='text-white/[0.8]'> <input type="text" placeholder='Add a comment...' className='border-none outline-none w-full bg-black text-white/[0.8]' /></span>
              <hr className='border-none mt-2 bg-[white]/[0.3] h-[1px]' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {comments?.comments.map((comment, index) => {
              return (
                <CommentsCard
                  key={index}
                  comment={comment} />
              )
            })}
          </div>

        </div>
      </div>
      <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
        {relatedVideos?.contents?.map((item, index) => {
          if (item?.type !== "video") return false;
          return (
            <SuggestionVideoCard
              key={index}
              video={item?.video}
            />
          );
        })}
      </div>
    </div>

  )
}

export default VideoDetails