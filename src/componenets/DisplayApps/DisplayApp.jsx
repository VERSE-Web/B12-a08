import React, { use, Suspense } from 'react';


const DisplayApp = ({ appsDisplayPromise }) => {
    const displayApps = use(appsDisplayPromise)

    console.log(displayApps)

    return (
        <div className="rounded-lg p-4 bg-[#F5F5F5]">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {displayApps.map((app) => (
                    <div
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-t-xl overflow-hidden">
                            {app.logo ? (
                                <img
                                    src={app.logo}
                                    alt={app.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-[#D9D9D9]" />
                            )}
                        </div>
                        <div className="p-3">
                            <p className="text-sm font-medium text-gray-800 leading-snug mb-2 line-clamp-2">
                                {displayApps.name}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <svg
                                        className="w-3.5 h-3.5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                                        />
                                    </svg>
                                    <span>{app.downloads}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <svg
                                        className="w-3.5 h-3.5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span>{app.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayApp;