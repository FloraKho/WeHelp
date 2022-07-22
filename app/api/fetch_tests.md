        TEST:
        {
                    "user_id"="1",
                    "name"="demobiz", 
                    "description"="demobiz", 
                    "category_id"="1"
                    "address"="demobiz", 
                    "city"="demobiz", 
                    "state"="demobiz",  
                    "zip_code"="12345",
                    "phone"="demobiz", 
                    "website"="demobiz", 
                    "price_range"="demobiz", 
                    "business_hours"="demobiz", 
                    "latitude"="37.322188769928474", 
                    "longitude"="-122.01485607795601"
        }

fetch('/api/businesses', {
  method: "POST",
  headers: {
    "Content-Type": "application/json", "csrf_token": "Ijc0ZGM2NTkyOThhMmNhMzE0MTFmMjZhMmVhZmE1YjliMjk0NzU0ZDgi.YtsrDg.mMNdbf1lqClaSKSIXCfnSvLX13U"
  },
  body: JSON.stringify({
                    user_id:1,
                    name:"demobiz", 
                    description:"demobiz", 
                    category_id:1,
                    address:"demobiz", 
                    city:"demobiz", 
                    state:"demobiz",  
                    zip_code:12345,
                    phone:"demobiz", 
                    website:"demobiz", 
                    price_range:"demobiz", 
                    business_hours:"demobiz", 
                    latitude:37.322188769928474, 
                    longitude:-122.01485607795601
                    })
}).then(res => res.json()).then(data => console.log(data));