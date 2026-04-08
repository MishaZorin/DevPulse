import { useEffect, useState, useRef } from 'react'
import './GitHubActivity.css'

function GitHub() {
    const [inputValue, setInputValue] = useState('')
    const [userResult, setUserResult] = useState(0)
    const [nullAvatar,setNullAvatar] = useState('')


    async function findPerson() {
        try {
            let response = await fetch(`https://api.github.com/users/${inputValue}`)
            let result = await response.json()
            setUserResult(result)

        }
        catch (error) {
            console.error(error)
        }
        if(!userResult){
            setNullAvatar('emptyAvatar')

        }


    }
    useEffect(() => {

        findPerson()

    }, [])






    return (
        <>
            <div className='page'>
                <div className='firstBlock'>
                    <input type="text" placeholder='Git Hub acc...' value={inputValue} onChange={(event) => {
                        setInputValue(event.target.value)
                    }} />
                    <button onClick={() => findPerson()} >Найти!</button>
                </div>
                <div className="secondPage">
                    <div className="profileCard">
                        <div className="profileTop">
                            <img
                                src={userResult.avatar_url}
                                className='avatar'
                            />
                            <h1>{userResult.login}</h1>
                            <h2></h2>
                            <span>Joined</span>
                            <p>{userResult.created_at}</p>
                        </div>

                        <div className="stats">
                            <div className="stat">
                                <span>Repos</span>
                                <strong>{userResult.public_repos}</strong>
                            </div>
                            <div className="stat">
                                <span>Followers</span>
                                <strong>{userResult.followers}</strong>
                            </div>
                            <div className="stat">
                                <span>Following</span>
                                <strong>{userResult.following}</strong>
                            </div>
                        </div>

                        <div className="links">
                            <div>📍 {userResult.location}</div>
                            <div>🐦 Not Available</div>
                            <div>🔗 {userResult.html_url}</div>
                            <div>🏢 @github</div>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default GitHub