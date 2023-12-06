import Navbar from "./navbar"
import Class from "./class"
import Description from "./class_description.jsx"
import './App.css'

export default function Enrollment() {

    return (
        
        <>
        <Navbar/>
        <section>
            <div id='sidebar'>
                <div id="sidebar-content">
                    <div id="class-search">
                        <Class 
                            classID={1}
                        />
                        <Class 
                            classID={2}
                        />
                        <Class 
                            classID={3}
                        />
                        <Class 
                            classID={4}
                        />
                        <Class 
                            classID={5}
                        />
                    </div>
                </div>
            </div>
            <div id="class-description">
                <h2>Class Description:</h2>
                <Description
                    classID = {6}
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
                <Description
                    classID = {5}
                />
            </div>
        </section>
        
        </>
    )
}
