import { Link } from "react-router-dom"
import style from './Home.module.css'
const Home = () => {
    return (
        <div>
            <section id={style.Homepage}>
                <Link to={'/'}>Registration</Link>
                <Link to={'/user'}>Users</Link>
            </section>
        </div>
    )
}

export default Home