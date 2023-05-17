import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike, AiFillDislike, AiFillLike } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import ReadMore from '../utils/Readmore'
import { abbreviateNumber } from "js-abbreviation-number";

const CommentsCard = ({ comment }) => {
  const [like, setLike] = useState(false)
  const [dislike, setdisLike] = useState(false)

  const likeButton = (()=>{
    setLike(!like)
    dislike && setdisLike(!dislike)
    console.log(like)
  })

  const disLikeButton = (()=>{
    setdisLike(!dislike)
    like && setLike(!like)
    console.log(dislike)
  })

    return (
        <div className='px-4 flex gap-4'>
            <div className='w-10 h-10 rounded-full overflow-hidden'>
                <img src={comment?.author?.avatar[0]?.url} alt="img" className='object-cover' />
            </div>
            <div className='flex flex-col w-fit'>
                <div className='flex gap-2 items-center'>
                    <span className='font-semibold text-[13px]'>{comment?.author?.title}</span>
                    <span className='text-[12px]  font-semibold text-white/[.5]'>{comment?.publishedTimeText}</span>
                </div>
                <span className='text-[15px]'><ReadMore>{comment.content}</ReadMore></span>
                <div className='flex gap-1 items-center my-1 cursor-pointer'>
                    <button onClick={likeButton}>{!like ? <AiOutlineLike className='text-2xl'/> : <AiFillLike className='text-2xl'/>}</button>
                    <span className='text-[13px] text-white/[.5]'>{abbreviateNumber(comment?.stats?.votes, 2)}</span>
                    <button className='ml-2' onClick={disLikeButton}>{!dislike ? <AiOutlineDislike className='text-2xl'/> : <AiFillDislike className='text-2xl'/>}</button>
                    <span className='ml-4 text-[12px] font-semibold hover:bg-white/[.2] rounded-2xl px-2 py-0.5'>Reply</span>
                </div>
               { comment?.stats?.replies > 0 ? (
                <span className='text-[#3675eb] flex gap-2 items-center cursor-pointer hover:bg-white/[.2] rounded-2xl w-fit px-2 mt-2 font-semibold'>
                    <IoMdArrowDropdown className='text-2xl  ' />
                    <span>
                        {comment?.stats?.replies} replies
                    </span> 
                </span>) : null }
            </div>
        </div>
    )
}

export default CommentsCard