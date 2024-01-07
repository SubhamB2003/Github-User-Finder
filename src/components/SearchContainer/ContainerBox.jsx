import axios from 'axios';
import React, { useState } from 'react';
import Card from '../ProfileCard/Card';

function ContainerBox({ color }) {

    const [user, setUser] = useState([]);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearchUser = async () => {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            if (res.status === 200) {
                setUser(res.data);
                setLoading(false);
            } else {
                window.alert("Wrong username ☹️");
            }
        } catch (err) {
            window.alert("Wrong username ☹️");
            setLoading(false);
        }
    }

    return (
        <div className='absolute w-[100%] h-[100%] z-20 overflow-y-scroll'>
            <p className='font-serif text-3xl font-semibold text-center text-white mt-12 whitespace-nowrap'>Find Github Users</p>

            <div className='flex justify-center mt-12'>
                <div className='w-[90%] md:w-[50%] xl:w-[34%] backdrop-blur-xl px-10 py-8 rounded-2xl space-y-6'>
                    <input className='w-full px-4 py-2 font-serif text-lg rounded-lg' value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <div className='flex justify-center'>
                        <button disabled={username.length !== 0 ? false : true}
                            className={`flex justify-center items-center w-[100%] md:w-[40%] bg-${color}-500 py-2 font-serif font-semibold text-white text-xl rounded-lg`}
                            onClick={() => {
                                setLoading(true)
                                handleSearchUser()
                            }}
                        > Search
                            {loading ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 stroke-white ml-4 animate-spin">
                                    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 stroke-white ml-4">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
            </div>

            {user.length !== 0 && <Card user={user} />}
        </div>
    )
}

export default ContainerBox