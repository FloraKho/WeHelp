import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

function ProfilePage({businesses}) {

    
    const sessionUser = useSelector(state => state.session.user)
    const businessArr = Object.values(businesses)
    const businessOwn = businessArr.filter(business => business.user_id === sessionUser?.id)
    console.log(businessOwn);



    return (
        <>
        <h1>Profile</h1>
        <div>
                <img src={ sessionUser.profile_pic } alt={sessionUser.username} />
                <button>Edit</button>
                <h3>{sessionUser.username}</h3>
                <h3>{sessionUser.email}</h3>
        </div>
        <div>
            <h1>Your Business Listing</h1>

            {businessOwn && businessOwn.map(biz => (
                <div>
                    {biz.name}
                </div>
            ))}
            
        </div>


        </>
    )
}

export default ProfilePage;