import React, { useState } from 'react';
import './Nav.css';
import Button from '../Button/Button';

function Nav(props) {
    console.log('Nav props:', props); // Debug log
    
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);

    const handleClick = (e) => {
        if (e.target.textContent === "Box") {
            setActive1(true);
            setActive2(false);
            setActive3(false);
            setActive4(false);
            setActive5(false);
            props.onSelectShape("box");
        } else if (e.target.textContent === "Sphere") {
            setActive1(false);
            setActive2(true);
            setActive3(false);
            setActive4(false);
            setActive5(false);
            props.onSelectShape("sphere");
        } else if (e.target.textContent === "Cone") {
            setActive1(false);
            setActive2(false);
            setActive3(true);
            setActive4(false);
            setActive5(false);
            props.onSelectShape("cone");
        } else if (e.target.textContent === "Cylinder") {
            setActive1(false);
            setActive2(false);
            setActive3(false);
            setActive4(true);
            setActive5(false);
            props.onSelectShape("cylinder");
        } else if (e.target.textContent === "Torus") {
            setActive1(false);
            setActive2(false);
            setActive3(false);
            setActive4(false);
            setActive5(true);
            props.onSelectShape("torus");
        }
    }


    return (
        <nav>
            <ul class="nav-items">
                <li>
                    <Button
                        activated={active1.toString()}
                        content="Box"
                        onClick={handleClick}
                    />
                </li>
                <li>
                    <Button
                        activated={active2.toString()}
                        content="Sphere"
                        onClick={handleClick}
                    />
                </li>
                <li>
                    <Button
                        activated={active3.toString()}
                        content="Cone"
                        onClick={handleClick}
                    />
                </li>
                <li>
                    <Button
                        activated={active4.toString()}
                        content="Cylinder"
                        onClick={handleClick}
                    />
                </li>
                <li>
                    <Button
                        activated={active5.toString()}
                        content="Torus"
                        onClick={handleClick}
                    />  
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
