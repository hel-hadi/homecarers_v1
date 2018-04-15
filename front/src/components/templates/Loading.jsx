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
                    <div className="ui inverted">
                        <div className="ui active inverted dimmer">
                            <div className="ui large text loader">Chargement</div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading