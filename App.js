import { useEffect, useState } from 'react';


import './style.css';

// for aos to work run command "npm install aos --save"
import AOS from 'aos';
import "aos/dist/aos.css";






AOS.init();




function App() {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 20;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.floor(count + inc);

                    setTimeout(updateCount, 50);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }, [])


    return (



        <div className="App">
           
            
                <div className="container-1">
                    <div className="para" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='counter_box'>
                        <div className="counter" data-target="35">0</div>
                        <p className='plus'>+</p>
                        </div>
                        <p className="head">sponsors</p>
                        <p className="passage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, iste maiores magnam nihil distinctio libero mollitia iusto veniam autem?</p>
                    </div>
                    <div className="para" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                    <div className='counter_box'>
                        <div className="counter" data-target="40">0</div>
                        <p className='plus'>+</p>
                        </div>
                        <p className="head">sponsors</p>
                        <p className="passage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, iste maiores magnam nihil distinctio libero mollitia iusto veniam autem?</p>
                    </div>
                    <div className="para" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                    
                        <div className='counter_box'>
                        <div className="counter" data-target="37">0</div>
                        <p className='plus'>+</p>
                        </div>
                        <p className="head">sponsors</p>
                        <p className="passage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, iste maiores magnam nihil distinctio libero mollitia iusto veniam autem?</p>
                    </div>
                    <div className="para" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    <div className='counter_box'>
                        <div className="counter" data-target="42">0</div>
                        <p className='plus'>+</p>
                        </div>
                        <p className="head">sponsors</p>
                        <p className="passage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor, iste maiores magnam nihil distinctio libero mollitia iusto veniam autem?</p>
                    </div>
                </div>
           
        </div>



    );
}


export default App;
