import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from './Home.module.css'
// import '../error1.css'

const Create = () => {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [dob, setdob] = useState("")

    let navi = useNavigate()

    let namedata = (e) => {
        setName(e.target.value)
    }


    let emaildata = (e) => {
        setEmail(e.target.value)
    }


    let dobdata = (e) => {
        setdob(e.target.value)
    }

    let submit = (e) => {
        e.preventDefault()
        console.log(name, email, dob);
        let obj = {
            name: name,
            email: email,
            dob: dob
        }
        axios.post("http://localhost:3000/User", obj)
            .then(() => { console.log("Dtaa has beeen stored"); })
            .catch(() => { console.log("Errroooooorrrrr"); })

        navi('/user')
    }
    return (
        <div className={style.userdiv}>
            <section id={style.myform}>
                <form action="" className={style.formcontent}>
                    <label htmlFor="">Create-User</label>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" value={name} onChange={namedata} /><br />
                    <label htmlFor="">Email</label>
                    <input type="mail" placeholder="Enter Email" value={email} onChange={emaildata} /><br />
                    <label htmlFor="">DOB</label>
                    <input type="date" placeholder="mm/dd/yyyy" value={dob} onChange={dobdata} /><br />
                    {/* {errors.birthdate && <p className='error'>{errors.birthdate}</p>} */}
                    <button onClick={submit}>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Create