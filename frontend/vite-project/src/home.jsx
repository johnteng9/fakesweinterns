import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './home.css'
import Navbar from "./navbar"
import Description from "./home_class_description"

export default function Home() {

    return (
        <>
        <Navbar/>
        <section className='center-section'>
            <div id = 'class-description'>
                <h2>Class Description:</h2>
                <Description
                    classID = {1}
                />
                <Description
                    classID = {2}
                />
                <Description
                    classID = {3}
                />
                <Description
                    classID = {4}
                />
            </div>
        </section>
        </>
    )
}
