
import { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import Videos from "./Videos"
import ChannelCard from './ChannelCard'
import {apiData} from "../utils/apiData.js"

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null) //null
  const [videos,setVideos] = useState([]) //[]

  const {id} = useParams();

  useEffect(()=>{
    // apiData(`channels?part=snippet&id=${id}`).then((data) =>setChannelDetail(data?.items[0]));

    // apiData(`search?channelId=${id}&part=snippet&id&order=date`).then((data) =>setVideos(data?.items));
    const fetchResults = async () => {
      const data = await apiData(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await apiData(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
           zIndex:10,
           height:"300px"
      }}/>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p='2'>
      <Box sx={{ mr:{sm:'100px'} }}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
