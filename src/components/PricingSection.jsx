export const PricingSection = () => {
  return (
    <div class="container mx-auto px-4 text-center bg-gray-100 rounded mt-10 md:mt-0 lg:mt-[-75px] mb-[75px] md:mb-[100px] lg:mb-[125px]">
    
    <h1 class="text-3xl lg:text-5xl font-bold mb-6 text-blue-800">Choose Your Membership</h1>
    <p class="text-base lg:text-xl mb-8 text-gray-600">Enhance your experience with our membership plans.</p>

    <div class="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div class="bg-white rounded-lg shadow-md p-6 lg:p-8 w-full lg:w-100 relative z-10">
            <h2 class="text-xl lg:text-2xl font-bold mb-4 text-blue-800">Free Membership</h2>
            <p class="text-gray-600">Access essential features to get started</p>
            <ul class=" text-gray-600 mt-4">
                <li>Scan a video</li>
                <li>Access the marketplace</li>
                <li>Free support</li>
            </ul>
            <p class="text-xl lg:text-3xl font-bold mt-4 text-blue-800">FREE</p>
            <button class="bg-blue-800 text-white px-10 py-3 w-full mt-6 rounded-full">Sign up</button>
        </div>

        <div class="bg-blue-800 text-white rounded-lg shadow-md p-8 lg:p-14 w-full lg:w-100">
            <h2 class="text-xl lg:text-2xl font-bold mb-4 z-10">Premium Membership</h2>
            <p class="text-gray-300 z-10">Unlock all features for a premium experience</p>
            <ul class="text-gray-300 mt-4 z-10">
                <li>Full access to advanced features</li>
                <li>Exclusive content and updates</li>
                <li>Priority customer support</li>
            </ul>
            <p class="text-xl lg:text-3xl font-bold mt-4 z-10">$9.99/month</p>
            <button class="bg-white text-blue-800 px-10 w-full py-3 mt-6 rounded-full z-10">Upgrade Now</button>
        </div>
    </div>
</div>
  )
}