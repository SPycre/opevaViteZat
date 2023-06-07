import '../style/Categories.css'
import { useState, useEffect } from 'react';
import Category from '../components/Category.jsx'
import Signup from '../components/Signup.jsx';
import Rectangle from '../components/Rectangle.jsx';

function Categories() {

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight * 0.7) {
                    section.classList.remove('hidden');
                    section.classList.add('shown');
                } else {
                    section.classList.remove('shown');
                    section.classList.add('hidden');
                }
            });
        });
      });

    

    return (
    <>
        <Signup/>
        <section id='intro'>
            <p>
                <span className='medium'>
                    We're building the next generation of information security through identity-first access management.
                </span>
                <br/>
                <span className='title'>
                    THE NEXT GENERATION IDENTITY OS.
                </span>
            </p>
        </section>
        <section id='signup'>
            <div id='signtext'>
                <p>
                    <span className='large'>
                        Sign up to harness the power of Crosswire.
                    </span>
                    <br/>
                    <span className='small'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <br/>
                    <button className='button'>Sign up</button>
                </p>
            </div>
            <div id="row">
                <div className="column">
                    <Rectangle/>
                    <Rectangle/>
                </div>    
            
                <div className="column">
                    <Rectangle/>
                    <Rectangle/>
                    <Rectangle/>
                </div>

                    <div className="column2">
                        <Rectangle/>
                        <Rectangle/>
                        <Rectangle/>
                    </div>

                    <div className="column2">
                        <Rectangle/>
                        <Rectangle/>
                    </div>
            </div>
        </section>
        <Category title="ONBOARDING" longtitle="AUTOMATED ONBOARDING" description="We give new employees permissions so they can be productive from day one."/>
        <Category title="ACCESS" longtitle="ACCESS AT A GLANCE" description="We show you all of your organisation's access in one place"/>
        <Category title="RULES-BASED" longtitle="RULES-BASED ACCESS" description="Have everyone in your organisation get access automatically. No human intervention required."/>
        <Category title="FLEXIBILITY" longtitle="FLEXIBILITY POLICY ENGINE" description="Define customized approval flow that meet your organisation's needs."/>
        
        
    </>
    )
}

export default Categories