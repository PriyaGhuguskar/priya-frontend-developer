import React, { useContext, useState, useCallback } from 'react'
import logopic from '../assets/1.webp'
import ProductsModal from './ProductsModal'

import { Context } from '../Context/ComtextApi'

const AllCapsule = ({ capsule }) => {
    console.log(capsule)
    const { loading } = useContext(Context)
    const [singleCapsule, setSingleCapsule] = useState([]);
    const [modalProduct, setModalProduct] = useState(false);

    const modalProductClick = useCallback(
        (e, capsule) => {
            e.preventDefault();
            setSingleCapsule(capsule);
            setModalProduct(true);
        },
        [setSingleCapsule, setModalProduct]
    );


    return (
        <>
            <div
                className=" max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50 hover:scale-105 transition-all ease-in-out"
            >
                <span className="block pb-4 text-xs font-medium tracking-widest uppercase text-violet-400">
                    {capsule?.type}
                </span>
                <img
                    height={350}
                    width={400}
                    src={logopic}
                    alt="Capsule"

                />
                <div className="mt-6 mb-2 h-12">
                    <h3 className="text-lg font-semibold tracking-wide"> Mission:{" "}
                        {capsule?.missions.length > 0
                            ? capsule?.missions.map((d, i) => {
                                return (
                                    <span key={i}>
                                        {d.name.slice(0, 24)}
                                        {i < capsule?.missions.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                );
                            })
                            : "To Be Announced"}
                    </h3>
                </div>
                <p className="text-gray-100">
                    {capsule?.details &&
                        capsule?.details.length > 0
                        ? capsule?.details.slice(0, 33) + "..."
                        : "Details will Update soon..."}
                </p>
                <div className="flex justify-center item-center">
                    <button
                        type="button"
                        onClick={(e) => modalProductClick(e, capsule)}
                        className="hover:scale-105 hover:border border border-gray-900 hover:bg-gray-900 hover:text-gray-100 hover:border-gray-100 transition-all ease-in-out mt-5 px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                    >
                        Read More
                    </button>
                </div>
            </div>
            {/* Modal Element */}
            {!loading && modalProduct ? (
                <section>
                    <ProductsModal
                        setModalProduct={setModalProduct}
                        singleCapsule={singleCapsule}
                    />
                </section>
            ) : null}
        </>
    )
}

export default AllCapsule