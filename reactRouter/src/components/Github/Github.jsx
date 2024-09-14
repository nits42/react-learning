import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/nits42')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            }
        )
    }, [])

    return (
        <div className='bg-gray-600 text-white text-center m-4 text-3xl p-4'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt='avatar' />
        </div>
    )
}

export default Github

