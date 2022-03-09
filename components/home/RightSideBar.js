import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">Suggestions for you</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

           <div className="my-2" >
             <h3 className="text-danger">Recruitments</h3>
             <div>
             <img src='7.png' width='50%'></img>
             <h4>Hexaware Technologies</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://www.freshersnow.com/hexaware-technologies-recruitment/">Apply Now</a> </button></div>
             <div>
             <img src='4.png' width='50%'></img>
             <h4>Tech Mahindra</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://recruitmentindia.in/tech-mahindra-off-campus-drive/">Apply Now</a> </button></div>
             <div>
             <img src='2.png' width='50%'></img>
             <h4>Capgemini</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://www.capgemini.com/in-en/capgemini-exceller-pooled-campus-drive-for-engineering-mca-graduates-2022-batch/">Apply Now</a> </button></div>
             <div>
             <img src='5.png' width='50%'></img>
             <h4>Infosys</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://www.freshersvoice.com/infosys-off-campus-drive/">Apply Now</a> </button></div>
             <div>
             <img src='3.png' width='50%'></img>
             <h4>IBM</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://tnpofficer.com/ibm-off-campus-drive/">Apply Now</a> </button></div>
             <div>
             <img src='6.png' width='50%'></img>
             <h4>Accenture</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://www.freshersvoice.com/accenture-off-campus-drive/">Apply Now</a> </button></div>
             <div>
             <img src='1.png' width='50%'></img>
             <h4>Tata Consultancy Services</h4>
             <button className="btn btn-outline-primary w-100"> <a href="https://www.tcs.com/careers/tcs-smart-hiring">Apply Now</a> </button></div>
               
            </div>

        </div>
    )
}

export default RightSideBar
