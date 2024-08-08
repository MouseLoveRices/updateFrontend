import React, { useEffect } from 'react'
import './body.css'
import WebIcon from '@mui/icons-material/Web';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import NewHeader from '../header/NewHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlices';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Body({children}) {
    const disPatch = useDispatch()
    const {listUser} = useSelector(state=>state.listUser)
    const navigate = useNavigate()
    useEffect(()=>{
        disPatch(fetchUser())
    },[disPatch])
    const handleClickUser =(id)=>{
        navigate(`/user/${id.toString()}`)
    }
  return (
    <>
    <NewHeader></NewHeader>
    <div className='bodyOfPage'>
        <div className='sideBar'>
            <div className='infor'>
                <h4>More Infor</h4>
                <button>
                    <WebIcon></WebIcon> 
                    <p>About us</p> 
                </button>
                <button>
                    <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
                    <p>Contact us</p>
                </button>   
            </div>
        <hr/>
        <div className='you'>
            <h4>You</h4>
            <button>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <p>History</p>
            </button>
            <button>
                <i class="fa-regular fa-star"></i>
                <p>Watch later</p>
            </button>
        </div>
        <hr/>
        
        <div className='userSubscribed'>
         <h4>Subscribed</h4>   
        {
            listUser.map((item,index)=>(
                <button key={index} onClick={()=>handleClickUser(item.id)}>
                    <Avatar src={item.avatar} alt='avatar'/>
                    <p>{item.user}</p>
                </button>
            ))
        }
        </div>
        </div>

        <div className='childrenItem'>
            <h1>This is body childrenItem</h1>
            {children}
        </div>
    </div>
    </>
  )
}
