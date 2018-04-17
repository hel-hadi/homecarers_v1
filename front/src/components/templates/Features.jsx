import React from 'react'
import  img_agenda from '@img/agenda.png'
import  img_book from '@img/book.png'
import  img_comm from '@img/comm.png'
import  img_fiche from '@img/fiche1.png'

const Features = () => (
    <div>
        <div className="ui equal width stackable internally celled grid">
        <div className="ui two column grid">
                <div className="column center aligned row">
                    <div className="column">
                        <img className="ui centered tiny circular image" alt="chat" src={img_comm} />
                        <div className="ui hidden divider"></div>
                        <h3 className="ui homefont homeblue">
                            Chat Homecarers
                        </h3>
                    </div>
                    <div className="wide column">
                        <img className="ui centered tiny circular image" alt="cahier" src={img_book} />
                        <div className="ui hidden divider"></div>
                        <h3 className="ui homefont homeblue">
                            Cahier de liaison
                        </h3>
                    </div>
                    <div className="column">
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <img className="ui centered tiny circular image" alt="agenda" src={img_agenda} />
                        <div className="ui hidden divider"></div>
                        <h3 className="ui homefont homeblue">
                            Agenda collaboratif
                        </h3>
                    </div>
                    <div className="column">
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <img className="ui centered tiny circular image"  alt="professional card" src={img_fiche} />
                        <div className="ui hidden divider"></div>
                        <h3 className="ui homefont homeblue">
                            Fiche Professionnel
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default Features