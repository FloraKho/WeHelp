import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addBusinessThunk } from '../../store/businesses';


function CreateBusinessPage({user}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)

    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category_id, setCategory_id ] = useState(null);
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("")
    const [ zip_code, setZip_code] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ website, setWebsite ] = useState("");
    const [ price_range, setPrice_range] = useState("");
    const [ business_hours, setBusiness_hours ] = useState("");
    const [ latitude, setLatitude ] = useState(null);
    const [ longitude, setLongitude ] = useState(null);

    const handleCreate = async (e) => {
        e.preventDefault();
        const newBusiness = {
            user_id: sessionUser.id,
            name,
            description,
            category_id,
            address,
            city,
            state,
            zip_code,
            phone,
            website,
            price_range,
            business_hours,
            latitude,
            longitude
        }
        dispatch(addBusinessThunk(newBusiness));
        history.push(`/businesses/${newBusiness.id}`)
    }



    return (
        <>
        <h1>Create Your Own Business Listing</h1>
        <form onSubmit={handleCreate}>

        </form>
        </>
    )




}

export default CreateBusinessPage;