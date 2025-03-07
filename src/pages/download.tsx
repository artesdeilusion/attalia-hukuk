 import { useEffect, useState } from "react";

const AppRedirect = () => {
  const [storeLink, setStoreLink] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      setStoreLink("https://play.google.com/store/apps/details?id=your.android.app.id");
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setStoreLink("https://apps.apple.com/app/your-ios-app-id");
    } else if (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
      // This ensures we detect macOS devices that support touch (MacBooks with Apple Silicon)
      setStoreLink("https://apps.apple.com/app/your-ios-app-id");
    } else {
      setStoreLink(null);
    }
  }, []);

  return (
    <div> 
       <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">Choose your app store:</p>
        {storeLink ? (
          <a href={storeLink} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg">Go to Store</a>
        ) : (
          <p className="text-gray-600 mt-4">App not available for this device.</p>
        )}
      </div>
    </div>
  );
};

export default AppRedirect;
