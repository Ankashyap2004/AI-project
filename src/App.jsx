import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text py-8 px-4 ">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">
                    AI Image Enhancer{" "}
                </h1>
                <p className="text-lg text-gray-500">
                    Upload your Image and let AI enhance to in seconds!
                </p>
            </div>

            <Home />

            <div className="text-sm text-gray-500 mt-6">
                Powered By @Anand Kashyap
            </div>
        </div>
    );
};

export default App;