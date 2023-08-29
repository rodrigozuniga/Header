import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './assets/react.svg'

export default function Menu(props) {
    const [showHideMenu,setShowHideMenu]=React.useState(false)

    function handleShowHideMenu() {
        //alert(`${showHideMenu}`)
        setShowHideMenu(prev=>!prev)        
    }

    const styles = {
        menulist: {
            display: 'flex',
            flexDirection: 'column',
            listStyleType: "none",
            paddingLeft: "0",
            alignItems: "center",
            margin:"0"
        },

        button: {
            backgroundColor: "red",
            marginBottom: "0", 
            marginLeft:"3px"
        },

        menuContainer:{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            alignContent: "left",
            justifyContent: "left",
            justifyItems: "left",
            border: "0px solid red",
            borderRadius: "8px",
            textAlign: "left",
            marginTop: "30px",
        },
        
        li: {
            textAlign: "center",
            justifyContent: "center",
            margin: "5px",
            padding: "5px 0px",
            width:"100%",
            border: "1px solid white",
            borderRadius:"8px"}
    };

    return (
        <>
            <div style={styles.menuContainer}
             onMouseEnter={handleShowHideMenu}
             onMouseLeave={handleShowHideMenu}>
                <button
                    style={styles.button}
>
                    {props.menuTitle}
                </button >
                    
                {showHideMenu &&
                    <ul style={styles.menulist}>        
                        {props.menuNames.map((e) => (<li style={styles.li}>
                            <a href={e[1] }>{e[0]}</a>
                         </li>))}
                        </ul>}
            </div>
        </>
    )
}