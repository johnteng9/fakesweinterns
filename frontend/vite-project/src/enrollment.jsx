import Navbar from "./navbar"
import Class from "./class"
import Description from "./class_description"

export default function Enrollment() {

    return (
        
        <>
        <Navbar/>
        <section>
            <div id='sidebar'>
                <div id="sidebar-content">
                    <h3>Class Search</h3>
                    <h5>Class Name:</h5>
                    <input></input>
                    <div id="class-search">
                        <Class 
                            classNumber={'CS 61A'}
                            className={'Structure and Interpretation of Computer Programs'}
                            days={'M, W, F'}
                            time={'2:00 - 3:00pm'}
                        />
                        <Class
                            classNumber={'CS 61B'}
                            className={'Data Structures'}
                            days={'M, W, F'}
                            time={'3:00 - 4:00pm'}
                        />
                        <Class
                            classNumber={'CS 61C'}
                            className={'Great Ideas in Computer Architecture'}
                            days={'M, W, F'}
                            time={'10:00 - 11:00am'}
                        />
                        <Class
                            classNumber={'CS 70'}
                            className={'Discrete Mathematics and Probability Theory'}
                            days={'Tu, Th'}
                            time={'9:30am - 11:00am'}
                        />
                        <Class
                            classNumber={'CS 198-199'}
                            className={'Intro to Full Stack Development Decal'}
                            days={'W, F'}
                            time={'5:00pm - 6:30pm'}
                        />
                    </div>
                </div>
            </div>
            <div id="class-description">
                <h2>Class Description:</h2>
                <Description
                    classNumber={'CS 61A'}
                    className={'Structure and Interpretation of Computer Programs'}
                    description={'An introduction to programming and computer science focused on abstraction techniques as means to manage program complexity. Techniques include procedural abstraction; control abstraction using recursion, higher-order functions, generators, and streams; data abstraction using interfaces, objects, classes, and generic operators; and language abstraction using interpreters and macros. The course exposes students to programming paradigms, including functional, object-oriented, and declarative approaches. It includes an introduction to asymptotic analysis of algorithms. There are several significant programming projects.Time conflicts ARE allowed. An alternate final exam WILL be offered. Lecture will be recorded for playback later.REQUISITES: All Undergraduate Students including Visitors. CREDIT RESTRICTIONS: Students will receive no credit for Computer Science 61A after completing Computer Science 47A or Computer Science 61AS. A deficient grade in Computer Science 61AS may be removed by taking Computer Science 61A. REPEAT RULES: Course is not repeatable for credit.'}
                    days={'M, W, F'}
                    time={'3:00 - 4:00pm'}
                />
                <Description
                    classNumber={'CS 61B'}
                    className={'Data Structures'}
                    description={'Fundamental dynamic data structures, including linear lists, queues, trees, and other linked structures; arrays strings, and hash tables. Storage management. Elementary principles of software engineering. Abstract data types. Algorithms for sorting and searching. Introduction to the Java programming language. Students will receive no credit for COMPSCI 61B after completing COMPSCI 61BL, or COMPSCI 47B. A deficient grade in COMPSCI 61B may be removed by taking COMPSCI 61BL. Course is not repeatable for credit.'}
                    days={'M, W, F'}
                    time={'10:00 - 11:00am'}
                />
                <Description
                    classNumber={'CS 61C'}
                    className={'Great Ideas in Computer Architecture (Machine Structures)'}
                    description={'The internal organization and operation of digital computers. Machine architecture, support for high-level languages (logic, arithmetic, instruction sequencing) and operating systems (I/O, interrupts, memory management, process switching). Elements of computer logic design. Tradeoffs involved in fundamental architectural design decisions. Students will receive no credit for COMPSCI 61C after completing COMPSCI 61CL. Meets Physical Science, L&S Breadth'}
                    days={'M, W, F'}
                    time={'10:00 - 11:00am'}
                />
                <Description
                    classNumber={'CS 70'}
                    className={'Great Ideas in Computer Architecture (Machine Structures)'}
                    description={'Logic, infinity, and induction; applications include undecidability and stable marriage problem. Modular arithmetic and GCDs; applications include primality testing and cryptography. Polynomials; examples include error correcting codes and interpolation. Probability including sample spaces, independence, random variables, law of large numbers; examples include load balancing, existence arguments, Bayesian inference. Students will receive no credit for Computer Science 70 after taking Mathematics 55.Course is not repeatable for credit.'}
                    days={'Tu, Th'}
                    time={'9:30am - 11:00am'}
                />
                <Description
                    classNumber={'CS 198-199'}
                    className={'Introduction to the Full Stack Development'}
                    description={'Introduction to Full Stack Development is a 3-unit Decal taught by undergraduate students at UC Berkeley. This course began as the internal education program for its parent club, Web Development at Berkeley. Since then, it has been developed and refined over a number of years, and is now offered to the entire Berkeley student body, aided by a team of students passionate about web development + education. This course contains a lot of content. Covering the entire web development stack is no easy task. The technologies that underlie web development are unique, complex, and difficult to grasp. Because each technology serves a specific purpose, it serves that purpose exceptionally well, but makes learning it much harder. At the same time, however, learning each technology is a small investment towards understanding a vast and complex, but critical, system. We sincerely hope that with what you learn, you will be able to contribute as much to the world as you can. The Internet has drastically changed the way that we live our lives in the last thirty years, its up to you to define the next thirty.'}
                    days={'W, F'}
                    time={'5:00pm - 6:30pm'}
                />
            </div>
        </section>
        
        </>
    )
}