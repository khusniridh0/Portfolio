const PreLoadingPage = () => {
    return (
        <div className="h-screen w-full fixed top-0 left-0 z-40 bg-[#FFDD99] flex flex-col items-center justify-center" >
            <img src="loading.gif" className="w-[80px] h-auto mx-auto -rotate-45" alt="Loading" />
            <h6 className="text-lg text-center font-medium text-[#422B00] mt-4">Ready to Explore</h6>
        </div>
    );
}

export default PreLoadingPage;