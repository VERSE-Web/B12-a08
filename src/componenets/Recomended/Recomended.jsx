import React, { Suspense } from "react";

// pretend this is passed in or imported
// const trendingAppsPromise = fetchTrendingApps();

const Recomended = ({ trendingAppsPromise }) => {
  const trendingApps = React.use(trendingAppsPromise);

  const randomIndex = Math.floor(Math.random() * trendingApps.length);
  const recommendation = trendingApps[randomIndex];

  console.log("Recommendation index:", randomIndex);

  return (
    <Suspense fallback={<div>Loading recommendations...</div>}>
      <div className="rounded-lg p-4 bg-[#F5F5F5]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Single card (random recommendation) */}
          {recommendation && (
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
              
              <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-t-xl overflow-hidden">
                <img
                  src={recommendation.logo}
                  className="w-full h-full object-cover"
                  alt={recommendation.name}
                />
              </div>

              <div className="p-3">
                <p className="text-sm font-medium text-gray-800 leading-snug mb-2 line-clamp-2">
                  {recommendation.name}
                </p>

                <div className="flex items-center justify-between">
                  
                  {/* Downloads */}
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>⬇ {recommendation.downloads}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>⭐ {recommendation.rating}</span>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </Suspense>
  );
};

export default Recomended;  