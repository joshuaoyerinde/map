import React from "react"

function Login() {
    // console.log(props)
    return (
        <div className="flex min-h-screen bg-gray-100 justify-center flex-1 flex-col p-2 md:p-0">
            <div className="md:mx-auto sm:w-full sm:max-w-md shadow-md bg-white p-4 rounded-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="w-full p-2 md:p-4 space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                     Email address
                    </label>
                    <input type="text" className="w-full app-input text-sm" placeholder="Email" />
                </div>
                <div className="w-full p-2 md:p-4 -mt-6 space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <input type="text" className="w-full app-input text-sm" placeholder="Password" />
                </div>
              
                <div className="flex justify-center mt-2 mb-3">
                    <button  className="btn-primary font text-sm">Signin</button>
                </div>
            </div>
        </div>
    )
}


export default Login

