import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { editBusinessThunk } from '../../store/businesses';
import DeleteBusiness from '../DeleteBusiness/DeleteBusiness';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import '../CreateBusinessPage/CreateBusinessPage.css'

function UpdateBusinessPage({ businesses }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const mapKey = useSelector(state => state.mapsState.key);

    const { businessId } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    // const businessesArr = Object.values(businesses);
    // const currentBusiness = businessesArr.find(businessId)
    // const categoriesArr = Object.values(categories)
    const cateArr = [
        {id: 1, name: 'Chinese'},
        {id: 2, name: 'Korean'},
        {id: 3, name: 'Japanese'},
        {id: 4, name: 'Thai'},
        {id: 5, name: 'Vietnamese'},
        {id: 6, name: 'Mexican'},
        {id: 7, name: 'Italian'},
        {id: 8, name: 'Coffee & Tea'},
        {id: 9, name: 'Breakfast & Brunch'}]
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

    // const statesArr = [
    //     'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
    // ]
    const pricesArr = ["$", "$$", "$$$", "$$$$"]
    // console.log("THIS IS WEBSITE", website)


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


    useEffect(() => {
        let errors = []
        if (name.length >= 50) errors.push("Name length invalid and should be less than 50 characters");
        if (!description.length) errors.push("Please enter description for your business");
        // if (!address.length) errors.push("Address is required");
        // if (!city.length) errors.push("City is required");
        // if (!state.length) errors.push("State is required");
        if (!/^\(?([0-9]{3})\)?([0-9]{3})[-]?([0-9]{4})$/.test(phone)) errors.push("Phone format invalid, should be in correct format (123)456-7890");
        // if (!/^\d+$/.test(zip_code) || zip_code.length !== 5) errors.push("Zipcode fotmat invalid, should only contains 5 numbers (ie. 12345)");
        if (!business_hours.length) errors.push("Business hour is required.")
        // if (!/^(-?\d+(\.\d+)?)$/.test(latitude)) errors.push("Latitude is required and should be in float");
        // if (!/\s*(-?\d+(\.\d+)?)$/.test(longitude)) errors.push("Longitude is required and should be in float");
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
        if (editedBiz && !errors.length) {
            setHasSubmitted(false)
            history.push(`/businesses/${newBizInfo.id}`)
        }
    }

    return (
        <div className='create-business-page'>
            <h1>Update your Business Information</h1>
            <div>
                {hasSubmitted && errors &&
                    <div>
                        {errors.map((error, idx) => <div key={idx}> ❌ {error}</div>)}
                    </div>
                }
            </div>
            {/* <DeleteBusiness businessId={businessId}/> */}
            <form onSubmit={handleEditSubmit}>
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
                    <div className='business-form-label'>Address</div>
                    {mapKey&&
                    <GooglePlacesAutocomplete
                        apiKey={mapKey}
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
                                    color: 'blue',
                                }),
                            },
                            longAddy,
                            onChange: setLongAddy
                        }}

                    />
                    }
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
                        value={+category_id}
                    // required
                    >
                        {cateArr.map(cate =>
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
                {/* <div>
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
                </div> */}
                <div>
                    <button id="submit-edit-biz" type="submit">Submit</button>
                    {/* <button type='button' onClick={() => history.goBack()}>Cancel</button> */}
                </div>
            </form>
        </div>
    )

}

export default UpdateBusinessPage;