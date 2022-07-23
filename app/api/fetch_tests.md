// -------------------------fetch post business
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

// fetch delete business
fetch('/api/businesses/21', {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json", "csrf_token": "Ijc0ZGM2NTkyOThhMmNhMzE0MTFmMjZhMmVhZmE1YjliMjk0NzU0ZDgi.YtsrDg.mMNdbf1lqClaSKSIXCfnSvLX13U"
  },
}).then(res => res.json()).then(data => console.log(data));


// -----------------------------------------fetch post business img
fetch('/api/business_images', {
  method: "POST",
  headers: {
    "Content-Type": "application/json", "csrf_token": "Ijc0ZGM2NTkyOThhMmNhMzE0MTFmMjZhMmVhZmE1YjliMjk0NzU0ZDgi.Yts81w.afTNUWL_LcLT3VNX7yFfzCXrMrY"
  },
   body: JSON.stringify({ 
    business_id:1,
    image_url: "abcd.jpg"
   })
}).then(res => res.json()).then(data => console.log(data));


fetch('/api/business_images/81', {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json", "csrf_token": "Ijc0ZGM2NTkyOThhMmNhMzE0MTFmMjZhMmVhZmE1YjliMjk0NzU0ZDgi.Yts81w.afTNUWL_LcLT3VNX7yFfzCXrMrY"
  },
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/reviews', {
  method: "POST",
  headers: {
    "Content-Type": "application/json", "csrf_token": "Ijc0ZGM2NTkyOThhMmNhMzE0MTFmMjZhMmVhZmE1YjliMjk0NzU0ZDgi.YttFkA.KVXrtjh1qayS9mSHGB5oeeKYl2c"
  },
   body: JSON.stringify({ 
    user_id:1,
    business_id:10,
    rating:5,
    content:"test2222",
   })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/reviews/39', {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json", "csrf_token": "Ijc0ZGM2NTkyOThhMmNhMzE0MTFmMjZhMmVhZmE1YjliMjk0NzU0ZDgi.YttFkA.KVXrtjh1qayS9mSHGB5oeeKYl2c"
  },
}).then(res => res.json()).then(data => console.log(data));

//-----------------------fetch update business
fetch('/api/businesses/2', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json", "csrf_token": "ImVhZTFiNTk0MzNmZWFlOGU0NDc5OGVhZGNmYWE2NDAzN2NmN2M1MzUi.Yts_Xg.Q48l7BAo7u5bI-gQe_b3nM9cNQo"
  },
  body: JSON.stringify({
                    user_id:1,
                    name:"demobiz12121212", 
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

//----------------------fetch update review

