import React, { useContext, useState } from 'react'
import NoResult from './NoResult'
import Loading from './LoadingCompo'
import AllCapsule from './AllCapsule'
import { Context } from '../Context/ComtextApi'

const SearchCompo = () => {
    const { loading, searchResults } = useContext(Context)

    const [dateFilter, setDateFilter] = useState("")
    const [statusFilter, setStatusFilter] = useState("")
    const [typeFilter, setTypeFilter] = useState("")


    const [page, setPage] = useState(1);


    const optionStatus = [...new Set(searchResults.map((product) => product?.status))];
    const optionLaunch = [...new Set(searchResults.map((product) => (new Date(product?.original_launch)).getFullYear()))];
    optionLaunch.sort((a, b) => a - b)

    const optionTypes = [...new Set(searchResults.map((product) => product?.type))];


    const filteredProducts = searchResults.filter(
        (product) =>
            product?.status.toLowerCase().includes(statusFilter.toLowerCase()) &&
            product?.type.toLowerCase().includes(typeFilter.toLowerCase()) &&
            (dateFilter === "" ||
                new Date(product.original_launch)
                    .getFullYear()
                    .toString()
                    .includes(dateFilter))
    );
    console.log(filteredProducts)

    const Paginationpages = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / 4); i++) {
        Paginationpages.push(i);
    }

    const pageHandeler = (num) => {
        if (num >= 1 &&
            num <= Math.ceil(filteredProducts.length / 4) &&
            num !== page)
            setPage(num)
    }


    const onReset = (e) => {
        e.preventDefault();
        setDateFilter("");
        setStatusFilter("");
        setTypeFilter("")
    };

    return (
        <>
            <section className="p-6 pt-16 pb-10 md:pt-5 lg:pt-10 bg-gray-800 text-gray-50">
                <form
                    className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                >
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className=" font-semibold text-2xl">Search Form</p>
                            <p className="text-sm">
                                Filter to get your desiered result.
                            </p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            {/* Capsule Original Launch */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className=" text-base my-1">
                                    Original launch
                                </label>
                                <div>
                                    <select
                                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-blue-700 text-gray-900"
                                        value={dateFilter}
                                        onChange={(e) => {
                                            // setCurrentPage(1);
                                            setDateFilter(e.target.value);
                                        }}
                                    >
                                        <option value="">All</option>
                                        {optionLaunch.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Capsule Status */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-base">
                                    Status
                                </label>
                                <div>
                                    <select
                                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                        value={statusFilter}
                                        onChange={(e) => {
                                            setStatusFilter(e.target.value);
                                        }}
                                    >
                                        <option value="">All</option>
                                        {optionStatus.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Capsule Type */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="type" className=" text-base">
                                    Type
                                </label>
                                <div>
                                    <select
                                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                        value={typeFilter}
                                        onChange={(e) => {
                                            // setCurrentPage(1);
                                            setTypeFilter(e.target.value);
                                        }}
                                    >
                                        <option value="">All</option>
                                        {optionTypes.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Reset Btn */}
                            <div className="col-span-full sm:col-span-3 flex justify-start items-end">
                                <button
                                    type="button"
                                    onClick={onReset}

                                    className=" text-base px-4 py-2 border rounded-md border-gray-100 hover:bg-violet-400 hover:text-gray-50"
                                >
                                    Reset All
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

            {/* Results */}
            <section className="bg-gray-800 text-gray-100">
                {!loading && filteredProducts.length <= 0 ? (
                    <NoResult />) : null}
                <div className="bg-gray-800 text-gray-100">
                    <div className="container flex items-center lg:items-start flex-col flex-wrap justify-center mx-auto lg:flex-row lg:justify-center gap-10 ">
                        {!loading &&
                            filteredProducts.slice(page * 4 - 4, page * 4).map((product) => {
                                return (

                                    <AllCapsule key={product?.capsule_serial}
                                        capsule={product} />
                                )
                            })}

                        {loading && <Loading />}


                    </div>
                </div>

                <div className="container flex items-center lg:items-start flex-col flex-wrap justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-center gap-10 ">
                    {filteredProducts.length > 0 &&
                        <div className="container flex items-center lg:items-start flex-col flex-wrap justify-center
                         p-6 mx-2 sm:py-2 lg:py-2 lg:flex-row lg:justify-center gap-2 ">

                            <span onClick={() => pageHandeler(page - 1)}
                                className={`${page > 1 ? " " : "hidden"} justify-center cursor-pointer inline-flex  bg-violet-400 text-black items-center px-4 py-2 text-sm font-semibold border
                                dark:border-gray-700`}>Prev</span>

                            {Paginationpages.map((num) => {
                                return (
                                    <span key={num}
                                        onClick={() => pageHandeler(num)}
                                        className={`${page === num ? " bg-violet-400" : null}
                                         cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold border
                                          dark:border-gray-700`}>{num}</span>
                                )
                            })}
                            <span onClick={() => pageHandeler(page + 1)}
                                className={`${page < Math.ceil(filteredProducts.length / 4) ? "" : " hidden"} justify-center cursor-pointer inline-flex  bg-violet-400 text-black items-center px-4 py-2 text-sm font-semibold border
                                          dark:border-gray-700`}>Next</span>

                        </div>
                    }
                </div>
            </section>

        </>
    )
}

export default SearchCompo