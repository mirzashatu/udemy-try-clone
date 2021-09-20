import React, { useState } from 'react';
import Shop from '../Shop/Shop';
import Header from '../Header/Header';
import './Cart.css'
const Cart = () => {
    const fakeData=[
        {   id:625204,
        title:"The Web Developer Bootcamp 2021","url":"/course/the-web-developer-bootcamp/",
        display_name:"Colt Steele",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg",
        money:50.50},

       { id:756150,
        title:"Angular - The Complete Guide (2021 Edition)",
        display_name:"Maximilian Schwarzmüller",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/756150_c033_2.jpg",
        money:50.50},
        {id:1565838,
        title:"The Complete 2021 Web Development Bootcamp",
        "display_name":"Dr. Angela Yu",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/1565838_e54e_12.jpg",
        money:50.50},
        {id:851712,
        title:"The Complete JavaScript Course 2021: From Zero to Expert!",
        display_name:"Jonas Schmedtmann",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
        money:50.50},
        {id:705264,
        title:"Modern React with Redux",
        display_name:"Stephen Grider",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/705264_caa9_11.jpg",
        money:50.50},
        {id:764164,
        title:"The Complete Web Developer Course 2.0",
        display_name:"Rob Percival",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/764164_de03_2.jpg",
        money:50.50},
        {id:437398,
        title:"Build Responsive Real-World Websites with HTML and CSS",
        display_name:"Jonas Schmedtmann",
        image_480x270:"https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg",
        money:50.50},
        {id:1430746,
        title:"The Complete Web Developer in 2021: Zero to Mastery",
        display_name:"Andrei Neagoie",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/1430746_2f43_10.jpg",
        money:50.50},
       {id:995016,
       title:"Vue - The Complete Guide (w/ Router, Vuex, Composition API)",
       display_name:"Maximilian Schwarzmüller",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        money:50.50},
       {id:364426,
       title:"JavaScript: Understanding the Weird Parts",
       display_name:"Anthony Alicea",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/364426_2991_6.jpg",
        money:50.50},
       {id:822444,
       title:"Python and Django Full Stack Web Developer Bootcamp",
       display_name:"Jose Portilla",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/822444_a6db.jpg",
        money:50.50},
       {id:1026604,
       title:"Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
       display_name:"Jonas Schmedtmann",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/1026604_790b_2.jpg",
        money:50.50},
       {id:1352468,
       title:"Master Microservices with Spring Boot and Spring Cloud",
       display_name:"in28Minutes Official",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/1352468_3d97_7.jpg",
        money:50.50},
       {id:806922,
       title:"The Complete ASP.NET MVC 5 Course",
       display_name:"Mosh Hamedani",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/806922_6310_3.jpg",
        money:50.50},
       {id:1463348,
       title:"Modern JavaScript From The Beginning",
       display_name:"Brad Traversy",
       image_480x270:"https://img-c.udemycdn.com/course/480x270/1463348_52a4_2.jpg",
        money:50.50}
    ]
    const [data,setData]=useState(fakeData)
    const[cart,setCart]=useState([])
    const handleAddProduct=(data)=>{
        console.log('hello')
        const newCart=[...cart,data];
        setCart(newCart)
    }
    
    return (
        <div className='all-container'>
            <div className="product-container">
           {data.map(data =><Shop data={data} handleAddProduct={handleAddProduct}> </Shop>)}
           </div>
           <div className="product-Header">
                <Header cart={cart}></Header>
            </div>
        </div>
        
    );
};

export default Cart;