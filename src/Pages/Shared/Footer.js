import React from 'react';
import footer from '../../assets/images/footer.png';

function Footer() {
                              let year = new Date().getFullYear();
  return (
                              <>
                              <footer style={{background: `url(${footer})`,backgroundSize:"contain"}} class="footer p-10 ml-24 text-center">
                              <div>
                                <span class="footer-title">Services</span> 
                                <a class="link link-hover">Branding</a>
                                <a class="link link-hover">Design</a>
                                <a class="link link-hover">Marketing</a>
                                <a class="link link-hover">Advertisement</a>
                              </div> 
                              <div>
                                <span class="footer-title">Company</span> 
                                <a class="link link-hover">About us</a>
                                <a class="link link-hover">Contact</a>
                                <a class="link link-hover">Jobs</a>
                                <a class="link link-hover">Press kit</a>
                              </div> 
                              <div>
                                <span class="footer-title">Legal</span> 
                                <a class="link link-hover">Terms of use</a>
                                <a class="link link-hover">Privacy policy</a>
                                <a class="link link-hover">Cookie policy</a>
                              </div>
                            </footer>

                              <footer class="footer footer-center p-4 pb-24 text-base-content">
                              <div>
                              <p>pabelmahbub - Copyright © {year} - All right reserved.</p>
                              </div>
                              </footer>
                              </>

  )
}

export default Footer