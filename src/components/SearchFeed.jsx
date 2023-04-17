import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetching } from '../utils/fetching';
import { Videos } from './';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]),
        { searchTerm } = useParams();

  useEffect (() => {
    fetching(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  
  return (
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold'mb={2} sx={{color: 'white'}}> 
          Search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span> videos
        </Typography>
        <Box display='flex'>
          <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default SearchFeed;