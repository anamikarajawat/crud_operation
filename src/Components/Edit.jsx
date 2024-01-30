import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from './Home.module.css'

const Edit = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [dob, setdob] = useState("")

    let prr = useParams()
    let navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/usersData/${prr.ab}`)
            .then((re) => {
                setName(re.data.name);
                setEmail(re.data.email);
                setdob(re.data.dob);
            })
            .catch(() => { console.log("Errr"); })
    }, [prr])

    let namedata = (e) => {
        setName(e.target.value)
    }

    let emaildata = (e) => {
        setEmail(e.target.value)
    }

    let dobdata = (e) => {
        setdob(e.target.value)
    }

    let submit = () => {
        let payload = {
            name: name,
            email: email,
            dob: dob
        }
        axios.put(`http://localhost:3000/usersData/${prr.ab}`, payload)

        navi('/user')
    }

    return (
        <div>
            <section id={style.myform}>
                <form action="" className={style.formcontent}>
                    <label htmlFor="">Edit-User</label><br />
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={namedata} /><br />
                    <label htmlFor="">Email</label>
                    <input type="mail" value={email} onChange={emaildata} /><br />
                    <label htmlFor="">DOB</label>
                    <input type="date" value={dob} onChange={dobdata} /><br />
                    <button onClick={submit}>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Edit