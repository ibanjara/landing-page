import logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 lg:p-10">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
    <div className="w-full lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0 relative z-10">
    <div className="flex items-center justify-center lg:justify-start mb-4">
        <img src={logo} alt="PrintHub Logo" className="mr-2 w-[10%]" />
        <span className="text-3xl ml-3 font-bold">PrintHub</span>
    </div>

    <p className="text-sm">
        Welcome to PrintHub - Your One-Stop Printing Solution. Providing high-quality printing services since 2023.
    </p>

    <p className="text-sm mt-4">
        Connect with us:
        <a href="https://tiktok.com/@printhub" className="text-black-500 mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://twitter.com/printhub" className="text-blue-400 mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/printhub" className="text-pink-500 mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
        </a>
    </p>

    <div className="flex justify-center lg:justify-start mt-4 lg:mt-8 relative z-10">
        <div className="mr-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#scan">
                Scan
            </a>
        </div>
        <div className="mx-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#shop">
                Shop
            </a>
        </div>
        <div className="mx-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#about">
                About
            </a>
        </div>
        <div className="mx-4">
            <a className="text-lg font-bold mb-2 lg:mb-4" href="#contact">
                Contact
            </a>
        </div>
    </div>
</div>

        <div className="w-full lg:w-1/3">
            
            <form className="max-w-lg mx-auto relative z-10">
            <p className='text-3xl mb-3'>Contact us</p>
            <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                        id="subject"
                        type="text"
                        placeholder="Enter your subject"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                        id="description"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</footer>
  )
}