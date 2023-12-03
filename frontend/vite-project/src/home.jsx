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
                    classNumber={'CS 61A'}
                    className={'Structure and Interpretation of Computer Programs'}
                    days={'M, W, F'}
                    time={'3:00 - 4:00pm'}
                />
                <Description
                    classNumber={'CS 70'}
                    className={'Great Ideas in Computer Architecture (Machine Structures)'}
                    days={'Tu, Th'}
                    time={'9:30am - 11:00am'}
                />
                <Description
                    classNumber={'CS 198-199'}
                    className={'Introduction to the Full Stack Development'}
                    days={'W, F'}
                    time={'5:00pm - 6:30pm'}
                />
            </div>
        </section>
        </>
    )
}