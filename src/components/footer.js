import React from 'react'

const Footer = () => {
    return (
        <div>
        
  <footer className="bg-white">
    <div className="container py-5 mt-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Seccion</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Seccion</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Link</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Seccion</h6>
          <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Ingresa tu Correo" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2020 Hotelcito All rights reserved.</p>
      </div>
    </div>
  </footer>
 
        </div>
    )
}

export default Footer
