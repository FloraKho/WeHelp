import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DeleteBusiness from "../DeleteBusiness/DeleteBusiness";
const BusinessDetailPage = () => {
const {businessId} = useParams()
    return(
        <>
            <NavLink to={`/businesses/${businessId}/edit`} exact={true} activeClassName='active'>
            businesses/edit
            </NavLink>
            <DeleteBusiness businessId={businessId}/>
        </>
    )
}

export default BusinessDetailPage;