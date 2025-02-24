import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer} >
            <nav>
                <ul>CUSTOMER SERVICES
                    <li><a href='#'>Help &Contact Us</a></li>
                    <li><a href='#'>Returns & Refund</a></li>
                    <li><a href='#'>Online Stores</a></li>
                    <li><a href='#'>Term & COnditions</a></li>
                    <li><a href='#'></a></li>
                </ul>
                <ul>COMAPNY
                    <li><a href='#'>What We Do</a></li>
                    <li><a href='#'>Available Services</a></li>
                    <li><a href='#'>Latest Posts</a></li>
                    <li><a href='#'>FAQs</a></li>
                </ul>
                <ul>SOCIAL MEDIA
                    <li><a href='#'>Twitter</a></li>
                    <li><a href='#'>Instagram</a></li>
                    <li><a href='#'>Facebook</a></li>
                    <li><a href='#'>Pinterest</a></li>
                </ul>
            </nav>

        </footer>)
}

export default Footer