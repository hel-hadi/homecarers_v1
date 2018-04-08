import React from 'react'
import { Style } from 'radium'
import '@css/loading.css'
import img_logo from '@img/logohome.png'

class Loading extends React.Component {
    render() {
        return (
            <div >
                <Style rules={{
                    body : {
                        margin: 0,
                        padding: 0,
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        opacity: 0.5
                },
                    h2 : {
                        textTransform: 'uppercase',
                        animation: 'pulse 0.5s linear 0s infinite alternate'
                    }
                }} />
                <div className="Loading loader">
                    <div className="ui two row grid">
                        <div className="ui centered row">
                            <img className="ui  centered circular image" alt="logo" src={img_logo} />
                        </div>
                        <div className="ui centered row">
                            <h2 className="homewhite"> Loading </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading