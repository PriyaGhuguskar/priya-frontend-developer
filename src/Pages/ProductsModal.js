import React from 'react'

const ProductsModal = ({ singleCapsule, setModalProduct }) => {
    const closeHandler = () => {
        setModalProduct(false);
    };
    return (
        <div className="fixed bg-opacity-40 top-2/4  left-2/4 -translate-x-2/4 -translate-y-2/4 shadow-xl transition-all ease-in-out bg-black w-screen h-screen">
            <div className="relative flex flex-col items-center   top-2/4  left-2/4 -translate-x-2/4 -translate-y-2/4 shadow-xl lg:max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-violet-400">
                <button
                    onClick={closeHandler}
                    className="absolute top-2 right-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-white hover:text-violet-700 hover:animate-spin ease-in-out "
                    >
                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                    </svg>
                </button>

                <div className="max-w-xs w-screen p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
                    <div className="mt-6 mb-2">
                        <div className=" mt-6 mb-2">
                            <h2 className="block text-xs font-medium tracking-widest uppercase pr-4 text-violet-400">
                                Name:
                            </h2>
                            <p className="text-xl font-semibold tracking-wide pt-2">
                                {singleCapsule.missions.length > 0
                                    ? singleCapsule.missions.map((d, i) => {
                                        return (
                                            <span key={i}>
                                                {d.name}
                                                {i < singleCapsule.missions.length - 1 ? ", " : ""}
                                            </span>
                                        );
                                    })
                                    : "To Be Announced"}
                            </p>
                        </div>
                        <div className=" mt-6 mb-2">
                            <h2 className=" block text-xs font-medium tracking-widest uppercase text-violet-400">
                                Details:
                            </h2>
                            <p className="text-gray-100 pt-2">
                                {singleCapsule &&
                                    singleCapsule.details &&
                                    singleCapsule.details.length > 0
                                    ? singleCapsule.details
                                    : "Details Coming soon..."}
                            </p>
                        </div>
                        <div className=" flex justify-between items-center mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase  text-violet-400">
                                Type:
                            </span>
                            <h2 className="text-xl font-semibold tracking-wide">
                                {singleCapsule.type}
                            </h2>
                        </div>
                        <div className=" flex justify-between items-center mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
                                Status:
                            </span>
                            <h2 className="text-xl font-semibold tracking-wide">
                                {singleCapsule.status}
                            </h2>
                        </div>
                        <div className=" flex justify-between items-center mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
                                Landings:
                            </span>
                            <h2 className="text-xl font-semibold tracking-wide">
                                {singleCapsule.landings}
                            </h2>
                        </div>
                        <div className=" flex justify-between items-center mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
                                Reuse count:
                            </span>
                            <h2 className="text-xl font-semibold tracking-wide">
                                {singleCapsule.reuse_count}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsModal