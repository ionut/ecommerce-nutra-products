import React from 'react'
import logoFooter from '../../assets/images/to-z-logo-footer.svg';
import americanexpress from '../../assets/images/americanexpress.svg';
import discover from '../../assets/images/discover.svg';
import mastercard from '../../assets/images/mastercard.svg';
import paypal from '../../assets/images/paypal.svg';
import secure from '../../assets/images/secure.svg';
import stripe from '../../assets/images/stripe.svg';
import visa from '../../assets/images/visa.svg';
import cloud from '../../assets/images/cloud.svg';
import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button';

export const Footer = () => {
    const conditionalNavLink = ({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-brightSkyBlue" : "text-white"

    return (
        <footer className='bg-dark'>
            <div className='container mx-auto py-10'>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-between items-center">
                        <img src={logoFooter} alt="Thunder of zeus" loading=" lazy" />
                        <ul className="flex flex-row flex-wrap gap-10">
                            <li><img src={paypal} alt="Paypal" loading=" lazy" /></li>
                            <li><img src={mastercard} alt="Mastercard" loading=" lazy" /></li>
                            <li><img src={visa} alt="Visa" loading=" lazy" /></li>
                            <li><img src={stripe} alt="Stripe" loading=" lazy" /></li>
                            <li><img src={americanexpress} alt="American Express" loading=" lazy" /></li>
                            <li><img src={discover} alt="Discover" loading=" lazy" /></li>
                            <li><img src={secure} alt="100% secure" loading=" lazy" /></li>
                        </ul>
                    </div>
                    <hr className='text-white h-1' />
                    <img src={cloud} alt="Cloud" className='block mx-auto' />
                    <div className='flex gap-10 bg-brightSkyBlue px-36 py-14'>
                        <div className='md:w-1/3'>
                            <h1 className='text-white text-xl font-bold'>Want To Get The Latest Offers & News From Thunder Of Zeus Straight To Your Inbox ?</h1>
                            <p className='text-white italic text-base'>(We won’t spam you. Our emails are informative & include The Latest offers).</p>
                        </div>
                        <form className='grid grid-cols-2 content-center md:gap-5 xl:gap-10 md:w-2/3'>
                            <input type="text" className='h-12 placeholder:px-2 placeholder:text-dark font-medium' placeholder='* Add Your Name Here' />
                            <input type="email" className='h-12 placeholder:px-2 placeholder:text-dark font-medium' placeholder='* Add Email' />
                            <Button extraStyle={'bg-darkBluecol-start-2 hover:text-white'} type={"submit"} >Send me info</Button>

                        </form>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-5">
                        <div className="flex flex-col md:gap-3">
                            <hr className='text-white h-1' />
                            <NavLink to="/" className={conditionalNavLink}><span className="text-xl font-medium">Home</span></NavLink>
                            <NavLink to="/product/:id" className={conditionalNavLink}><span className="text-xl font-medium">Shop</span></NavLink>
                            <NavLink to="https://suprememedia.com" className={conditionalNavLink}><span className="text-xl font-medium">Affiliate Program</span></NavLink>
                        </div>
                        <div className="flex flex-col md:gap-3">
                            <hr className='text-white h-1' />
                            <NavLink to="/faq" className={conditionalNavLink}><span className="text-xl font-medium">FAQ</span></NavLink>
                            <NavLink to="/about-us" className={conditionalNavLink}><span className="text-xl font-medium">About Us</span></NavLink>
                            <NavLink to="/contact-us" className={conditionalNavLink}><span className="text-xl font-medium">Contact Us</span></NavLink>
                        </div>
                        <div className="flex flex-col md:gap-3">
                            <hr className='text-white h-1' />
                            <NavLink to="/terms-and-conditions" className={conditionalNavLink}><span className="text-xl font-medium">Terms & Conditions</span></NavLink>
                            <NavLink to="/privacy-policy" className={conditionalNavLink}><span className="text-xl font-medium">Privacy Policy</span></NavLink>
                            <NavLink to="/disclaimer" className={conditionalNavLink}><span className="text-xl font-medium">Disclaimer</span></NavLink>
                        </div>
                    </div>
                    <div className=''>
                        <hr className='text-white h-1 mb-3' />
                        <p className='text-white text-center text-sm mb-3'>Thunder of Zeus is a health and wellness company that strives to make daily supplements easy for all. We create products with a deep rooted commitment of providing men with easy access to products that can help which are innovative, Gluten-free, Non-GMO, Vegan. Thunder of Zeus team works tirelessly to provide the best possible customer experience by listening carefully to your needs. They know how important it is to find good quality ingredients which are sourced correctly.</p>
                        <p className='text-white text-center text-sm mb-3'>* These statements have not been evaluated by the Food and Drug Administration or evaluated by the European Medicines Agency. This product is not intended to diagnose, treat, cure, or prevent any disease. The views and nutritional advice expressed by Thunder of Zeus are not intended to be a substitute for conventional medical service. Individual results may vary.</p>
                    </div>
                    <div className=''>
                        <hr className='text-white h-1 mb-3' />
                        <p className='text-white text-center text-sm mb-3'>Copyright © 2023 THUNDER OF ZEUS. All rights reserved.</p>
                        <p className='text-white text-center text-sm mb-3'>Amashen Limited</p>
                        <p className='text-white text-center text-sm mb-3'>Registration Number: HE 398867</p>
                        <p className='text-white text-center text-sm mb-3'>Address: 3 Krinou, 401B office, 4th Floor, Agios Athanasios 4103, Oval Building,</p>
                        <p className='text-white text-center text-sm mb-3'>Limassol Cyprus</p>
                        <p className='text-white text-center text-sm mb-3'>VAT 10398867N</p>
                        <p className='text-white text-center text-sm'>Tel. Number:25260821</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
