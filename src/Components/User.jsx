import axios from "axios"
import { useEffect, useState } from "react"
import { Link,  } from "react-router-dom"
import style from './Home.module.css'

const User = () => {

    let [data, setData] = useState([])
    // let navi=useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/User")
            .then((resp) => { setData(resp.data) })
    }, [])

    let Delete = (x) => {
        axios.delete(`http://localhost:3000/User/${x}`)
        // navi=('/user')
        window.location.assign('/user')

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