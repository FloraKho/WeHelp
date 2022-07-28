import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addBusinessThunk } from '../../store/businesses';
import './CreateBusinessPage.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

function CreateBusinessPage({ categories }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const categoriesArr = Object.values(categories)
    const sessionUser = useSelector(state => state.session.user)
    // const statesArr = [
    //     'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
    //   ]
    const pricesArr = ["$", "$$", "$$$", "$$$$"]

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category_id, setCategory_id] = useState(1);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState('')
    const [zip_code, setZip_code] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [price_range, setPrice_range] = useState(pricesArr[0]);
    const [business_hours, setBusiness_hours] = useState("");
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    //for AutoComplete
    const [longAddy, setLongAddy] = useState(null);
    const [realAddyStr, setRealAddyStr] = useState('');
    // console.log(longAddy);
    let placeId = (longAddy?.value.place_id);

    //geocode by 3rd party:

    geocodeByPlaceId(placeId)
        .then(results => {
            console.log(results)
            setRealAddyStr(results[0].formatted_address);
            setAddress(realAddyStr.split(', ')[0]);
            setCity(realAddyStr.split(', ')[1]);
            let temp = realAddyStr.split(', ')[2];
            setState(temp.split(' ')[0]);
            // console.log(`${parseInt(temp.split(' ')[1])}, type is ${typeof parseInt(temp.split(' ')[1]) } from line 50`)
            setZip_code(parseInt(temp.split(' ')[1]));
            // console.log(`${state} and ${zip_code} from line 57`);
            // console.log(`from line 56 ${zip_code}`)
            // console.log(`addy: ${address}, city: ${city}, state: ${state} from line 55`)
        })
        .catch(error => console.error(error));

    // console.log(`line 95 ${placeId}, ${realAddyStr}`)

    if (realAddyStr != '') {
        geocodeByAddress(realAddyStr)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                // console.log('Successfully got latitude and longitude', { lat, lng });
                setLatitude(lat);
                setLongitude(lng);
            }
            );
    }


    const [errors, setErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        let errors = []
        if (name.length >= 50) errors.push("Name length invalid and should be less than 50 characters");
        if (!description.length) errors.push("Please enter description for your business");
        // if (!address.length) errors.push("Address is required");
        // if (!city.length) errors.push("City is required");
        // if (!state.length) errors.push("State is required");
        if (!/^\(?([0-9]{3})\)?([0-9]{3})[-]?([0-9]{4})$/.test(phone)) errors.push("Phone format invalid, should be in correct format (123)456-7890");
        // if (!/^\d+$/.test(zip_code) || zip_code.length !== 5) errors.push("Zipcode format invalid, should only contains 5 numbers (e.g. 12345)");
        if (!business_hours.length) errors.push("Business hour is required.")
        // if (!/^(-?\d+(\.\d+)?)/.test(latitude)) errors.push("Latitude is required and should be in float");
        // if (!/\s*(-?\d+(\.\d+)?)$/.test(longitude)) errors.push("Longitude is required and should be in float");
        setErrors(errors);
    }, [name, description, address, city, state, zip_code, phone, price_range, business_hours, latitude, longitude]);

    const handleCreate = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)
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
        const newbiz = await dispatch(addBusinessThunk(newBusiness));
        if (newbiz && !errors.length) {
            reset();
            setHasSubmitted(false)
            history.push(`/businesses/${newbiz.id}/image-upload`)
        }
    }

    const reset = () => {
        setName('');
        setDescription('');
        setCategory_id(1);
        setAddress('');
        setCity('');
        setState('');
        setZip_code('');
        setPhone('');
        setWebsite('');
        setPrice_range('');
        setBusiness_hours('');
        setLatitude('');
        setLongitude('');

    }

    return (
        <div className='create-business-page'>
            <h1>Create Your Own Business Listing</h1>
            <div>
                {hasSubmitted && errors &&
                    <div className="error-msg">
                        {errors.map((error, idx) => <div key={idx}> ❌ {error}</div>)}
                    </div>
                }
            </div>
            <form onSubmit={handleCreate}>
                <div className='business-form-unit'>
                    <div className='business-form-label'>Business Name</div>
                    <input
                        placeholder='Business Name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    // required
                    />
                </div>
                <div className='business-form-unit'>
                    {/* Enter Your Google Map Location Info
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
                    </div> */}
                    <div className='business-form-label'>Address</div>
                    <GooglePlacesAutocomplete
                        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
                        selectProps={{
                            styles: {
                                input: (provided) => ({
                                    ...provided,
                                    color: 'black',
                                }),
                                option: (provided) => ({
                                    ...provided,
                                    color: 'black',
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: '#155e75',
                                }),
                            },
                            longAddy,
                            onChange: setLongAddy
                        }}

                    />
                </div>
                {/* <div>
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
                </div> */}
                {/* <div>
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
                </div> */}
                {/* <div>
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
                </div> */}
                {/* <div>
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
                </div> */}
                <div className='business-form-unit'>
                    <div className='business-form-label'>Phone</div>
                    <input
                        placeholder='ie. (123)456-7890'
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    // required
                    />
                </div>
                <div className='business-form-unit'>
                    <div className='business-form-label'>Website</div>
                    <input
                        placeholder='Website (Optional)'
                        type='text'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className='business-form-unit'>
                    <div className='business-form-label'>Category</div>
                    <select
                        onChange={(e) => setCategory_id(e.target.value)}
                        value={category_id}
                    // required
                    >
                        {categoriesArr.map(cate =>
                            <option value={cate.id} key={cate.id}>{cate.name}</option>
                        )}
                    </select>
                </div>
                <div className='business-form-unit'>
                    <div className='business-form-label'>Price</div>
                    <select
                        onChange={(e) => setPrice_range(e.target.value)}
                        value={price_range}
                    // required
                    >
                        {pricesArr.map(price =>
                            <option key={price}>{price}</option>
                        )}
                    </select>
                </div>
                <div className='business-form-unit'>
                    <div className='business-form-label'>Business Hour</div>
                    <input
                        placeholder='(ie. 10:00AM-10:00PM)'
                        type='text'
                        value={business_hours}
                        onChange={(e) => setBusiness_hours(e.target.value)}
                    // required
                    />
                </div>
                <div className='business-form-unit'>
                    <div className='business-form-label'>Add Your Description</div>
                    <textarea
                        placeholder='Add Your Description...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    // required
                    />
                </div>
                <div>
                    <button id='next-button' type="submit">Next</button>
                    {/* <button type='button' onClick={() => history.goBack()}>Cancel</button> */}
                </div>
            </form>
        </div>
    )




}

export default CreateBusinessPage;