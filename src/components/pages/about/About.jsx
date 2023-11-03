import React from 'react'
import Nav from '../../common/navbar/Nav'
import { corevalues1, corevalues2, mission, starter, vision} from "../../../assets/images/image"
import './about.css'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

const About = () => {
  return (
    <div className=''>
     <Nav className="home-nav"/> 
     <div class="starter">
        <img src={starter} alt="starter" id='starter-img'/>
        <div class="text">
            <h1>Who We Are</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis 
              rem inventore totam iure. Inventore, 
              loreeaque!</p>
        </div>
    </div>

     <div className='mission'>
      <img src={mission} alt="mission"  />
            <div className='mission-notes'>
                <h2>Mission</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aperiam delectus dolor sunt modi, 
                  repellendus animi qui ut, a Lorem ipsum dolorsit amet consectetur adipisicing elit. Ab
                   laudantium dolores cum. Saepe, facere iste! Ad quam deleniti laborum libero distinctio 
                   cum beatae. Amet quaerat veritatis inventore ipsa aperiam!
                  spernatur quisquam saepe necessitatibus vero reiciendis assumenda quod non nisi fuga vitae
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aperiam delectus dolor sunt modi, 
                  repellendus animi qui ut, a Lorem ipsum dolorsit amet consectetur adipisicing elit. Ab
                   laudantium dolores cum. Saepe, facere iste! Ad quam deleniti laborum libero distinctio 
                   cum beatae. Amet quaerat veritatis inventore ipsa aperiam!
                  spernatur quisquam saepe necessitatibus vero reiciendis assumenda quod non nisi fuga vitae
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aperiam delectus dolor sunt modi, 
                  repellendus animi qui ut, a Lorem ipsum dolorsit amet consectetur adipisicing elit. Ab
                   laudantium dolores cum. Saepe, facere iste! Ad quam deleniti laborum libero distinctio 
                   cum beatae. Amet quaerat veritatis inventore ipsa aperiam!
                  spernatur quisquam saepe necessitatibus vero reiciendis assumenda quod non nisi fuga vitae
                  .</p>
            </div>
            

     </div>
             <div className='add-ons-notes'>
     <p id='add-ons-notes'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sed aperiam delectus dolor sunt modi, 
                  repellendus animi qui ut, a Lorem ipsum dolorsit amet consectetur adipisicing elit. Ab
                   laudantium dolores cum. Saepe, facere iste! Ad quam deleniti laborum libero distinctio 
                   cum beatae. Amet quaerat veritatis inventore ipsa aperiam!
                  spernatur quisquam saepe necessitatibus vero reiciendis assumenda quod non nisi
                  spernatur quisquam saepe necessitatibus vero reiciendis assumenda quod non nisi fuga vitae
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aperiam delectus dolor sunt modi, 
                  repellendus animi qui ut, a Lorem ipsum dolorsit amet consectetur adipisicing elit. Ab
                   laudantium dolores cum. Saepe, facere iste! Ad quam deleniti laborum libero distinctio 
                   cum beatae. Amet quaerat veritatis inventore ipsa aperiam!
                   spernatur quisquam saepe necessitatibus vero reiciendis assumenda quod non nisi fuga vitae
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aperiam delectus dolor sunt modi, 
                  repellendus animi qui ut, a Lorem ipsum dolorsit amet consectetur adipisicing elit. Ab
                   laudantium dolores cum. Saepe, facere iste! Ad quam deleniti laborum libero distinctio 
                   cum beatae. Amet quaerat veritatis inventore ipsa aperiam!
                   f</p>
                   </div>
               
               

                  <div className="wrapper">
                         <div className="vision">
                          <h3>Vision</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil similique incidunt 
                            veniam quisquam,<br/> iste vel minus quaerat,
                             qui quod odio! Eius, nulla. Eius quod consectetur dolore. 
                             Adipisci, unde facilis.<br/>Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. At rem, beatae <br/>cumque ab facilis facere dolores dolorem ullam cum 
                              libero? Molestiae animi alias ullam asperiores.<br/> Amet blanditiis eius dignissimos vitae
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eveniet, quo veritatis
                               minima deleniti reiciendis nulla quam<br/> obcaecati sed, dolore laudantium esse fugiat
                                tempora magnam, dolorem accusamus consequatur perferendis? Fugit <br/>cumque dicta, molestias in autem 
                                illo necessitatibus praesentium amet,<br/> blanditiis eius aperiam repudiandae, 
                              fugiat excepturi numquam! Ea veniam nam ullam numquam!!
                             </p>
                         </div>
                                
                                    <div className='div-2'>
                                    <img src={vision} alt="vision" />
                                    </div>
                  </div>

                   <div className='header'>
                   <Header text="Core Values"/>
                   </div>
                              {/* core-values starts Here */}
                   <div className='core-values_1'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime esse
                       rerum ipsam, ratione unde praesentium 
                      placeat suscipit repellat maiores nam porro ad odio pariatur illum, sit ea dolor itaque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil similique incidunt 
                            veniam quisquam,<br/> iste vel minus quaerat,
                             qui quod odio! Eius, nulla. Eius quod consectetur dolore. 
                             Adipisci, unde facilis.Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. At rem, beatae <br/>cumque ab facilis facere dolores dolorem ullam cum 
                              libero? Molestiae animi alias ullam asperiores.Amet blanditiis eius dignissimos vitae
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eveniet, quo veritatis
                               minima deleniti reiciendis nulla quamobcaecati sed, dolore laudantium esse fugiat
                                tempora magnam, dolorem accusamus consequatur perferendis? Fugit cumque dicta, molestias in autem 
                                illo necessitatibus praesentium amet,<br/> blanditiis eius aperiam repudiandae, 
                              fugiat excepturi numquam! Ea veniam nam ullam numquam!!
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis 
                              iste recusandae aperiam accusamus, asperiores sint ipsam, iure expedita quod ea vel ducimus est,
                               voluptatum quas veritatis obcaecati rerum delectus.
                    </p>
                   </div>

                                <div className='core-value_img'>
                                              <img src={corevalues1} alt=" core-value1"  id='core-value1'/>
                                              <img src={corevalues2} alt=" core-value2" id='core-value2' />
                                </div>

                                <div className='core-values_1'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime esse
                       rerum ipsam, ratione unde praesentium 
                      placeat suscipit repellat maiores nam porro ad odio pariatur illum, sit ea dolor itaque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil similique incidunt 
                            veniam quisquam,<br/> iste vel minus quaerat,
                             qui quod odio! Eius, nulla. Eius quod consectetur dolore. 
                             Adipisci, unde facilis.Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. At rem, beatae <br/>cumque ab facilis facere dolores dolorem ullam cum 
                              libero? Molestiae animi alias ullam asperiores.Amet blanditiis eius dignissimos vitae
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eveniet, quo veritatis
                               minima deleniti reiciendis nulla quamobcaecati sed, dolore laudantium esse fugiat
                                tempora magnam, dolorem accusamus consequatur perferendis? Fugit cumque dicta, molestias in autem 
                                
                    </p>
                   </div>
                   {/* core-values Ends Here */}

                    {/* Footer starts Here */}
                   <div>
        <Footer />
      </div>
      {/* Footer Ends Here */}
    
    </div>
  )
}

export default About
