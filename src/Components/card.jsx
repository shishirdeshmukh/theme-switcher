export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
