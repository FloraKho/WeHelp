import React from "react"

const PageNotFound = () => {
    return (
        <div className="no-result">
            <div className="wrong-pic" style={{ backgroundImage: `url(https://cdn.dribbble.com/users/2155753/screenshots/6716126/error_prancheta_1_co_pia.png)` }}></div>
            <p>Oops! No Result Found!! Something Went Wrong...
            </p>
        </div>
    )
}

export default PageNotFound;