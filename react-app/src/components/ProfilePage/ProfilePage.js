import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import EditModal from "./EditModal";

function ProfilePage({businesses}) {


    let sessionUser = useSelector(state => state.session.user)
    // const currentUserId = sessionUser?.id;
    const businessArr = Object.values(businesses)
    const businessOwn = businessArr.filter(business => business.user_id === sessionUser?.id)
    // const [users, setUsers] = useState([]);
    // const currentUser = users.find(user => user.id === +currentUserId)


    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('/api/users/');
    //         const responseData = await response.json();
    //         setUsers(responseData.users);
    //     }
    //     fetchData();
    // }, []);



    return (
        <>
        <h1>Profile</h1>
        <div>
                <img src={ sessionUser?.profile_pic } alt={sessionUser?.username} />
                <EditModal />
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