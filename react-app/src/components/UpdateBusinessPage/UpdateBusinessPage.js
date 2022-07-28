import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { editBusinessThunk } from '../../store/businesses';
import DeleteBusiness from '../DeleteBusiness/DeleteBusiness';

function UpdateBusinessPage({businesses, categories}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const { businessId } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    // const businessesArr = Object.values(businesses);
    // const currentBusiness = businessesArr.find(businessId)
    const categoriesArr = Object.values(categories)
    const currentBiz = businesses[businessId];

    const [name, setName] = useState(currentBiz?.name);
    const [description, setDescription] = useState(currentBiz?.description);
    const [category_id, setCategory_id] = useState(currentBiz?.category_id);
    const [address, setAddress] = useState(currentBiz?.address);
    const [city, setCity] = useState(currentBiz?.city);
    const [state, setState] = useState(currentBiz?.state)
    const [zip_code, setZip_code] = useState(currentBiz?.zip_code);
    const [phone, setPhone] = useState(currentBiz?.phone);
    const [website, setWebsite] = useState(currentBiz?.website);
    const [price_range, setPrice_range] = useState(currentBiz?.price_range);
    const [business_hours, setBusiness_hours] = useState(currentBiz?.business_hours);
    const [latitude, setLatitude] = useState(currentBiz?.latitude);
    const [longitude, setLongitude] = useState(currentBiz?.longitude);
    const [errors, setErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const statesArr = [
        'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
    ]
    const pricesArr = ["$", "$$", "$$$", "$$$$"]
    console.log("THIS IS WEBSITE", website)

    useEffect( () => {
        let errors = []
        if (name.length >= 50) errors.push("Name length invalid and should be less than 50 characters");
        if (!description.length) errors.push("Please enter description for your business");
        if (!address.length) errors.push("Address is required");
        if (!city.length) errors.push("City is required");
        if (!state.length) errors.push("State is required");
        if (!/^\(?([0-9]{3})\)?([0-9]{3})[-]?([0-9]{4})$/.test(phone)) errors.push("Phone format invalid, should be in correct format (123)456-7890");
        if (!/^\d+$/.test(zip_code) || zip_code.length !== 5) errors.push("Zipcode fotmat invalid, should only contains 5 numbers (ie. 12345)");
        if (!business_hours.length) errors.push("Business hour is required.")
        if (!/^(-?\d+(\.\d+)?)$/.test(latitude)) errors.push("Latitude is required and should be in float");
        if (!/\s*(-?\d+(\.\d+)?)$/.test(longitude)) errors.push("Longitude is required and should be in float");
        setErrors(errors);
    }, [name, description, address, city, state, zip_code, phone, price_range, business_hours, latitude, longitude]);

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        const newBizInfo = {
            id: businessId,
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
        let editedBiz = dispatch(editBusinessThunk(newBizInfo));
        if(editedBiz && !errors.length){
            setHasSubmitted(false)
            history.push(`/businesses/${newBizInfo.id}`)
        }
    }

    return (
        <>
            <div>
                { hasSubmitted && errors &&
                    <div>
                        {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                    </div>
                }
            </div>
            <DeleteBusiness businessId={businessId}/>
            <h1>Update your Business Information</h1>
            <form onSubmit={handleEditSubmit}>
                <div>
                    <label>
                        Business Name
                        <input
                            placeholder='Business Name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                                // required
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
                                // required
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

export default UpdateBusinessPage;