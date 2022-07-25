import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addBusinessThunk } from '../../store/businesses';


function CreateBusinessPage({categories}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const categoriesArr = Object.values(categories)
    const sessionUser = useSelector(state => state.session.user)
    const statesArr = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
        'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
        'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    const pricesArr = ["$","$$","$$$","$$$$"]

    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category_id, setCategory_id ] = useState(1);
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("")
    const [ zip_code, setZip_code] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ website, setWebsite ] = useState("");
    const [ price_range, setPrice_range] = useState("");
    const [ business_hours, setBusiness_hours ] = useState("");
    const [ latitude, setLatitude ] = useState(0.00);
    const [ longitude, setLongitude ] = useState(0.00);


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
        const newbiz = dispatch(addBusinessThunk(newBusiness));
        history.push(`/businesses/${newbiz.id}`)
    }



    return (
        <>
        <h1>Create Your Own Business Listing</h1>
        <form onSubmit={handleCreate}>
            <div>
                <label>
                    Business Name
                    <input
                        placeholder='Business Name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Address
                    <input
                        placeholder='Address'
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    City
                    <input
                        placeholder='City'
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    State
                    <select 
                        onChange={(e) => setState(e.target.value)} 
                        value={state}
                        >
                        {statesArr.map(type =>
                            <option key={type}>{type}</option>
                        )}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    ZIP
                    <input
                        placeholder=' (ie. 12345)'
                        type='text'
                        value={zip_code}
                        onChange={(e) => setZip_code(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Phone
                    <input
                        placeholder='ie. (123)456-7890'
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Website
                    <input
                        placeholder='Website (Optional)'
                        type='text'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Category
                    <select 
                        onChange={(e) => setCategory_id(e.target.value)} 
                        value={category_id}
                        required
                        >
                        {categoriesArr.map(cate =>
                            <option value={cate.id} key={cate.id}>{cate.name}</option>
                        )}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Price Range
                    <select 
                        onChange={(e) => setPrice_range(e.target.value)} 
                        value={price_range}
                        required
                        >
                        {pricesArr.map(price =>
                            <option key={price}>{price}</option>
                        )}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Business Hours
                    <input
                        placeholder='(ie. 10:00AM-10:00PM)'
                        type='text'
                        value={business_hours}
                        onChange={(e) => setBusiness_hours(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                Please provide description to let customer know you better!
                <br></br>
                    <textarea
                        placeholder='Add Your Description...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                Enter Your Google Map Location Info
                <div>
                    <label>
                    latitude
                        <input
                            placeholder='Latitude'
                            type='text'
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                    longitude
                        <input
                            placeholder='Longitude'
                            type='text'
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                            required
                        />
                    </label>
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
                {/* <button type='button' onClick={() => history.goBack()}>Cancel</button> */}
            </div>
        </form>
        </>
    )




}

export default CreateBusinessPage;