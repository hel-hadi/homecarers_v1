import React from 'react'
import img_logo_blanc from '@img/logosurblanc.png'
import { Style } from 'radium'

class Loading extends React.Component {
    render() {
        return (
            <div >
                <Style rules={{
                    body : {
                        margin: 0,
                        padding: 0,
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        opacity: 0.7
                },
                    h2 : {
                        textTransform: 'uppercase',
                        animation: 'pulse 0.5s linear 0s infinite alternate'
                    }
                }} />
                <div className="">
                    <div className="ui inverted">
                        <div className="ui active inverted dimmer content">
                            <img className="ui mediun2 image" alt="logo home carers" src={img_logo_blanc}/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div className="ui large text loader"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading