import { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"
import classes from './Layout.module.css'
import LiveChat from "../Pages/Livechat/Livechat"
const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
            <LiveChat /> {/* Floating LiveChat Component */}
        </Fragment >
    )

}

export default Layout