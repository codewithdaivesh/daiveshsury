import React from "react";

const Footer = () => {

    return (
        <>
            <div class="container-fluid">
                <footer class="p-5">
                    <div class="row">

                        <div className="col-12 col-lg-2">
                            <h5 className="footer-title">Section</h5>
                            <ul class="nav flex-column footer-text">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </div >
        </>
    )

}

export default Footer;