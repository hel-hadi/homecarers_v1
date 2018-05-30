import React from 'react'
import img_chat from '@img/chat1.png'
import img_book from '@img/book1.png'
import img_blason from '@img/blason2.png'
import img_patient from '@img/patient12.png'
import img_profession from '@img/profession1.png'
import img_fiche from '@img/doctor-icon.png'
import img_link from '@img/linker1.png'
import img_note from '@img/note12.png'
import img_star from '@img/star1.png'

const Features = () => (
    <div>
        <div className="ui vertical stripe segment">
            <div className="ui container">
                <h4 className="ui horizontal header divider">
                <a href="">Fonctionnalités</a>
            </h4>

                <div className="ui one column grid">
                    <div className="column center aligned row">
                        <div className="column">
                            <img className="ui centered tiny  image" alt="chat" src={img_book} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="gras"> Suivi médical et de soin</p>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">Le cahier de liaison pour chaque patient</p>
                        </div>
                    </div>
                </div>

                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui one column grid">
                    <div className="column center aligned row">
                        <div className="column">
                            <img className="ui centered mini1  image" alt="chat" src={img_patient} />
                            <div className="ui hidden divider"></div>
                            <p className="gras"> Patient </p>
                        </div>
                    </div>
                </div>

                <div className="ui two column grid">
                    <div className="column center aligned row">
                        <div className="column">
                            <img className="ui centered mini image" alt="chat" src={img_note} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">Notez vos symptômes afin que vos soignants aient accès à l'information.</p>
                        </div>
                        <div className="column">
                            <img className="ui centered mini  image" alt="chat" src={img_link} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">Soyez informé sur les professionels de santé qui ont accès à votre suivi médical.</p>
                        </div>
                        <div className="column">
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <img className="ui centered mini  image" alt="chat" src={img_star} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight">Bénéficiez d'un suivi médical complet et constant quel que soit votre soignant.</p>
                        </div>
                    </div>
                </div>

                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>

                <div className="ui one column grid">
                    <div className="column center aligned row">
                        <div className="column">
                            <img className="ui centered mini1 image" alt="chat" src={img_fiche} />
                            <div className="ui hidden divider"></div>
                            <p className="gras"> Professionnel</p>
                            <div className="ui hidden divider"></div>
                        </div>
                    </div>
                </div>

                <div className="ui two column grid">
                    <div className="column center aligned row">
                        <div className="column">
                            <img className="ui centered mini image" alt="chat" src={img_chat} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight"> Soyez en relation avec les acteurs du dossier médical de votre patient</p>
                        </div>
                        <div className="column">
                            <img className="ui centered mini  image" alt="chat" src={img_fiche} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight"> Accès aux informations pertinentes selon votre profession </p>
                        </div>
                        <div className="column">
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <img className="ui centered mini  image" alt="chat" src={img_blason} />
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <div className="ui hidden divider"></div>
                            <p className="featurelight"> Dégréé d’accréditation et d'accès aux informations médicales </p>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    </div>

);

export default Features