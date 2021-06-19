
function Header() {
    return(
        <nav className="navbar navbar-expand navbar-light" style={{"background-color": "#EAEAEA"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#loginNavbar" aria-controls="#loginNavbar" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="loginNavbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;