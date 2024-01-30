import axios from "axios"
import { useEffect, useState } from "react"
import { Link, } from "react-router-dom"
import style from './Home.module.css'

const User = () => {

    let [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:3000/usersData`)
                .then((resp) => { setData(resp.data) })
        }, 500)
    }, [])

    let Delete = (x) => {
        axios.delete(`http://localhost:3000/usersData/${x}`)
        setTimeout(() => {
            axios.get(`http://localhost:3000/usersData`).then(res => {
                setData(res.data)
                console.log('delete schedule data ', res.data)

            })
        }, 500)
        
    }
    return (
        <div id={style.userHome}>
            {
                data.map((x) => {
                    return (
                        <div className={style.user}>
                            <table>
                                <th>Id {x.id}</th>
                                <tr>
                                    <tr>Name: </tr>
                                    <td>{x.name}</td>
                                </tr>
                                <tr>
                                    <tr>Email: </tr>
                                    <td>{x.email}</td>
                                </tr>
                                <tr>
                                    <tr>DOB: </tr>
                                    <td>{x.dob}</td>
                                </tr>
                                <tr>
                                    <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>

                                    <td><button onClick={() => { Delete(x.id) }}>Delete</button></td>

                                </tr>

                            </table>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default User