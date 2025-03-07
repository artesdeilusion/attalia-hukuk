 import { useEffect, useState } from "react";

const AppRedirect = () => {
  const [storeLink, setStoreLink] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      setStoreLink("https://play.google.com/store/apps/details?id=com.standyroutes.standy");
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setStoreLink("https://apps.apple.com/tr/app/standy-%C3%B6%C4%9Frenci-i-ndirimleri/id6741170791");
    }  else {
      setStoreLink(null);
    }
  }, []);

  return (
    <div> 
       <div className="flex flex-col bg-white items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">Choose your app store:</p>
        {storeLink ? (
          <a href={storeLink} className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-lg">Go to Store</a>
        ) : (
          <p className="text-gray-600 mt-4">App not available for this device.</p>
        )}
      </div>
    </div>
  );
};

export default AppRedirect;
