import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {UserAuth} from '../contex/AuthContext'
import{db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { async } from "@firebase/util";

const Movie=({ item })=> {
  const [like, setLike] = useState(false);
  const[saved, setSaved]= useState(false)
  const {user} =UserAuth()

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveShow = async()=>{
   if(user?.email){
    setLike(!like)
    setSaved(true)
    await updateDoc(movieID,{
      SaveShows:arrayUnion(),
      id: item.id,
      title:item.title,
      img: item.backdrop_path
    
    })
   }else{
    alert('please Log In to save Movies.')
   }
  }

  return (
   
      <div className="w-[220px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p- ">
        <img
          className="w-full h-auto block "
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="whitespace-no-wrap text-x5 md:text-sm font-bold flex justify-center items-center h-full text-center uppercase ">
            {item?.title}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-grey-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-grey-300" />
            )}
          </p>
        </div>
      </div>
   
  );
}
export default Movie;