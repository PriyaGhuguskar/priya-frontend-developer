import React, { useContext } from 'react'
import Loading from './LoadingCompo'
import AllCapsule from './AllCapsule'

import { Context } from '../Context/ComtextApi'
const ResultData = () => {
    const { loading } = useContext(Context)
    return (
        <div className="container flex items-center lg:items-start flex-col flex-wrap justify-center mx-auto lg:flex-row lg:justify-center gap-10 ">
            {!loading &&
                searchResults.map((item) => {
                    return (
                        <AllCapsule key={item?.capsule_serial} />
                    )
                })}
            {loading && <Loading />}


        </div>
    )
}

export default ResultData