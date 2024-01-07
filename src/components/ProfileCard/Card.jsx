import React from 'react';

function Card({ user }) {

    return (
        <div className='flex justify-center z-40 my-10'>
            <div className='w-[90%] md:w-[50%] xl:w-[34%] backdrop-blur-xl px-10 py-8 rounded-2xl space-y-6 overflow-hidden'>
                <div className='flex flex-col items-center space-y-4'>
                    <img src={`https://images.weserv.nl/?output=webp&url=${user.avatar_url}`} alt='user avatar'
                        className='w-24 h-24 rounded-full' />
                    <div className='flex flex-col items-center'>
                        <p className='font-serif text-white text-xl mb-2'>{user.login}</p>
                        <p className='font-serif text-white text-lg'>{user.bio}</p>
                    </div>
                    <div className='flex justify-evenly w-full'>
                        <div className='flex flex-col items-center'>
                            <p className='font-serif text-white text-lg border-b px-2'>Followers</p>
                            <p className='font-serif text-white text-lg'>{user.followers}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='font-serif text-white text-lg border-b px-2'>Following</p>
                            <p className='font-serif text-white text-lg'>{user.following}</p>
                        </div>
                    </div>

                    <div className='flex justify-between w-full space-x-5 md:space-x-0'>
                        <a href={user.html_url} target='_blank' rel="noreferrer" className='flex flex-col items-center space-y-2 md:pl-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>
                            <p className='font-serif text-white text-lg'>Profile</p>
                        </a>

                        <a href={user.html_url} target='_blank' rel="noreferrer" className='flex flex-col items-center space-y-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white stroke-white">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            <p className='font-serif text-white text-lg'>Twitter</p>
                        </a>

                        <a href={`https://github.com/${user.login}?tab=repositories`} target='_blank' rel="noreferrer" className='flex flex-col items-center space-y-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                            <p className='font-serif text-white text-lg'>Repository</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card