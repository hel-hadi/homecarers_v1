import React from 'react'
import propTypes from 'prop-types'
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

class SignupForm extends React.Component {
    state = {
        data: {
            email: '',
            password: '',
            name: '',
            firstName: '',
            type: '',
            profession: '',
            num: '',
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = data => {
        const errors = {};

        if (!isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Can't be blank";
        if (!data.name) errors.name = "You must fill in your name";
        if (!data.firstName) errors.firstName = "You must fill in your first name";
        if (!data.type) errors.type = "You must choose a category ";
        if (!data.profession) errors.profession = "You must fill in your first name";
        if (!isMobilePhone(data.num, 'fr-FR')) errors.num = "This is not a valid number";
        return errors;
    }

    render() {
        const {data, errors, loading } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit} loading ={loading} class="ui large form">
                    <div class="ui stacked">
                        { errors.global && <Message negative>
                            <Message.Header> Something Went Wrong</Message.Header>
                            <p>{errors.global}</p>
                        </Message>
                        }
                        <div class="field" error={!!errors.email} >
                            <div class="ui left icon input">
                                <i class="mail icon"></i>
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    value={data.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.email && <p>error</p>}
                        </div>
                        <div class="field">
                            <div class="two fields">
                                <div class="field" error={!!errors.name}>
                                    <div class="ui left icon input">
                                        <i class="user icon"></i>
                                        <label htmlFor="name"></label>
                                        <input
                                            type="name"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={data.name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {errors.name && <p>error</p>}
                                </div>
                                <div class="field" error={!!errors.firstName}>
                                    <div class="ui left icon input">
                                        <i class="user icon"></i>
                                        <label htmlFor="firstName"></label>
                                        <input
                                            type="firstName"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Your First Name"
                                            value={data.firstName}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {errors.firstName && <p>error</p>}
                                </div>
                            </div>
                        </div>

                        <div class="field" error={!!errors.type}>
                            <div class="ui left icon input">
                                <label htmlFor="category"></label>
                                <select name="type"
                                        id="type"
                                        value=  {data.type}
                                        onChange={this.onChange}>
                                    <option value="">Category</option>
                                    <option value="medecin">Médecin - spécialiste</option>
                                    <option value="intervenant">Métiers de la Santé</option>
                                </select>
                            </div>
                            {errors.type && <p>error</p>}
                        </div>

                        {data.type === "medecin" ?
                            <div class="field" error={!!errors.profession}>
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <label htmlFor="profession"></label>

                                    <select name="profession"
                                            placeholder="Your profession"
                                            class="ui fluid search dropdown"
                                            value={data.profession}
                                            onChange={this.onChange}>
                                        <option value=""></option>
                                        <option value="Acupuncteur">Acupuncteur</option>
                                        <option value="Addictologue">Addictologue</option>
                                        <option value="Allergologue">Allergologue</option>
                                        <option value="Anatomo-cyto-pathologiste">Anatomo-Cyto-Pathologiste</option>
                                        <option value="Anesthesiste-reanimateur">Anesthésiste-réanimateur</option>
                                        <option value="Angiologue">Angiologue</option>
                                        <option value="Cancerologue">Cancérologue</option>
                                        <option value="Cancerologue-medical">Cancérologue médical</option>
                                        <option value="Cancerologue-radiotherapeute">Cancérologue radiothérapeute
                                        </option>
                                        <option value="Cardiologue">Cardiologue</option>
                                        <option value="Chiropracteur">Chiropracteur</option>
                                        <option value="Chirurgien-general">Chirurgien général</option>
                                        <option value="Chirurgien-infantile">Chirurgien infantile</option>
                                        <option value="Chirurgien-maxillo-facial">Chirurgien maxillo-facial</option>
                                        <option value="Chirurgien-orthopediste-et-traumatologue">Chirurgien orthopediste
                                            et traumatologue
                                        </option>
                                        <option value="Chirurgien-thoracique-et-cardio-vasculaire">Chirurgien thoracique
                                            et cardio-vasculaire
                                        </option>
                                        <option value="Chirurgien-urologue">Chirurgien urologue</option>
                                        <option value="Chirurgien-vasculaire">Chirurgien vasculaire</option>
                                        <option value="Chirurgien-visceral">Chirurgien visceral</option>
                                        <option value="Chirurgien-dentiste">Chirurgien-dentiste</option>
                                        <option value="Chirurgien-plasticien">Chirurgien-plasticien</option>
                                        <option value="Chirurgien-maxillo-facial-et-stomatologiste">Chirurgien
                                            maxillo-facial et stomatologiste
                                        </option>
                                        <option value="Dermatologue-et-venerologue">Dermatologue et vénérologue</option>
                                        <option value="Dieteticien">Diététicien</option>
                                        <option value="Echographiste">Echographiste</option>
                                        <option value="Endocrinologue-diabetologue">Endocrinologue diabétologue</option>
                                        <option value="Gastro-enterologue-et-hepatologue">Gastro-entérologue et
                                            hépatologue
                                        </option>
                                        <option value="Gynecologue-medical">Gynécologue médical</option>
                                        <option value="Gynecologue-medical-et-obstetricien">Gynécologue médical et
                                            obstétricien
                                        </option>
                                        <option value="Gynecologue-obstetricien">Gynécologue obstétricien</option>
                                        <option value="Geneticien">Généticien</option>
                                        <option value="Geriatre">Gériatre</option>
                                        <option value="Homeopathe">Homéopathe</option>
                                        <option value="Hypnotherapeute">Hypnothérapeute</option>
                                        <option value="Hematologue">Hématologue</option>
                                        <option value="Infirmier">Infirmier</option>
                                        <option value="Laboratoire">Laboratoire</option>
                                        <option value="Masseur-Kinesitherapeute">Masseur-kinésithérapeute</option>
                                        <option value="Medecin-biologiste">Médecin biologiste</option>
                                        <option value="Medecin-du-sommeil">Médecin du sommeil</option>
                                        <option value="Medecin-generaliste">Médecin généraliste</option>
                                        <option value="Nutritionniste">Médecin nutritionniste</option>
                                        <option value="Medecin-specialiste-en-medecine-interne">Médecin spécialiste en
                                            médecine interne
                                        </option>
                                        <option value="Medecin-specialiste-en-medecine-nucleaire">Médecin spécialiste en
                                            médecine nucléaire
                                        </option>
                                        <option
                                            value="Medecin-specialiste-en-medecine-physique-et-de-readaptation">Médecin
                                            spécialiste en médecine physique et de réadaptation
                                        </option>
                                        <option value="Medecine-appliquee-aux-sports">Médecine appliquée aux sports
                                        </option>
                                        <option value="Médecine morphologique et anti-âge">Médecine morphologique et
                                            anti-âge
                                        </option>
                                        <option value="Naturopathe">Naturopathe</option>
                                        <option value="Neurochirurgien">Neurochirurgien</option>
                                        <option value="Neurologue">Neurologue</option>
                                        <option value="Neuropsychiatre">Neuropsychiatre</option>
                                        <option value="Nephrologue">Néphrologue</option>
                                        <option value="Oto-rhino-laryngologue-orl-et-chirurgien-cervico-facial">ORL et
                                            chirurgien cervico-facial
                                        </option>
                                        <option value="Obstetricien">Obstétricien</option>
                                        <option value="Ophtalmologiste">Ophtalmologiste</option>
                                        <option value="Orthophoniste">Orthophoniste</option>
                                        <option value="Orthoptiste">Orthoptiste</option>
                                        <option value="Osteopathe">Ostéopathe</option>
                                        <option value="Pneumologue">Pneumologue</option>
                                        <option value="Psychanalyste">Psychanalyste</option>
                                        <option value="Psychiatre">Psychiatre</option>
                                        <option value="Psychiatre-de-l&#39;enfant-et-de-l&#39;adolescent">Psychiatre de
                                            l&#39;enfant et de l&#39;adolescent
                                        </option>
                                        <option value="Psychologue">Psychologue</option>
                                        <option value="Pediatre">Pédiatre</option>
                                        <option value="Pedicure-Podologue">Pédicure-podologue</option>
                                        <option value="Radiologue">Radiologue</option>
                                        <option value="Radiotherapeute">Radiothérapeute</option>
                                        <option value="Rhumatologue">Rhumatologue</option>
                                        <option value="Reanimateur-medical">Réanimateur medical</option>
                                        <option value="Sage-femme">Sage-femme</option>
                                        <option value="Sophrologue">Sophrologue</option>
                                        <option value="Stomatologiste">Stomatologiste</option>
                                    </select>
                                </div>
                                {errors.profession && <p>error</p>}
                            </div>
                            :
                            <div>

                            </div>
                        }
                        {data.type === "intervenant" ?

                            <div class="field" error={!!errors.profession}>
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <label htmlFor="profession"></label>

                                    <select name="profession"
                                            placeholder="Your profession"
                                            class="ui fluid search dropdown"
                                            value={data.profession}
                                            onChange={this.onChange}>
                                        <option value=""></option>
                                        <option value="accueillant">Accueillant Familiale</option>
                                        <option value="amp">Aide médico-psychologique</option>
                                        <option value="aideSoignante">Aide Soignante</option>
                                        <option value="ambulancier">Ambulancier(ère)</option>
                                        <option value="assistantDentaire">Assistante Dentaire</option>
                                        <option value="assistantMaternel">Assistante Maternelle</option>
                                        <option value="audioprothesiste">Audioprothésiste</option>
                                        <option value="auxiliairePuériculture">Auxiliaire de puériculture</option>
                                        <option value="auxiliaireVieSociale">Auxiliaire de vie sociale</option>
                                        <option value="brancardier">Brancardier</option>
                                        <option value="cadreSoignantePole">Cadre soignant de pôle</option>
                                        <option value="dieteticien">Diététicien(ne)</option>
                                        <option value="dosimetriste">Dosimétriste</option>
                                        <option value="educateurSpecialise">Educateur (trice) spécialisé(e)</option>
                                        <option value="encadrantSocioEducatif">Encadrant (e) Socio-éducatif</option>
                                        <option value="encadrantUniteSoins">Encadrant d'unité de soins et d'activités paramédicales</option>
                                        <option value="encadrantTransportSanitaire">Encadrant(e) transport sanitaire</option>
                                        <option value="epithesiste">Epithésiste</option>
                                        <option value="ergotherapeute">Ergothérapeute</option>
                                        <option value="infirmier">Infirmier(ère) en soins généraux (IDE)</option>
                                        <option value="infirmierPuericulteur">Infirmier(ère) puériculteur(trice) (IPDE)</option>
                                        <option value="masseurKinesitherapeute">Masseur(euse) kinésithérapeute</option>
                                        <option value="moniteurEducateur">Moniteur(trice) éducateur(trice)</option>
                                        <option value="orthopediste">Orthopédiste - orthésiste</option>
                                        <option value="orthophoniste">Orthophoniste</option>
                                        <option value="orthopediste">Orthopédiste - orthésiste</option>
                                        <option value="orthoprothesiste">Orthoprothésiste</option>
                                        <option value="psychologue">Psychologue</option>
                                        <option value="psychomotricien">Psychomotricien(ne)</option>
                                        <option value="preparateurPharmacie">Préparateur(trice) en pharmacie</option>
                                        <option value="responsableSocioEducatif">Responsable socio-éducatif</option>
                                        <option value="psychologue">Psychologue</option>
                                    </select>
                                </div>
                                {errors.profession && <p>error</p>}
                            </div>
                            :
                            <div>

                            </div>
                        }
                        <div class="field" error={!!errors.password} >
                            <div class="ui left icon input">
                                <i class="key icon"></i>
                                <label htmlFor="password"></label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Make it secure"
                                    value={data.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.password &&<p>error</p>}
                        </div>
                        <div class="field" error={!!errors.num}>
                            <div class="ui left icon input">
                                <i class="phone icon"></i>
                                <label htmlFor="phone"></label>
                                <input
                                    type="text"
                                    id="num"
                                    name="num"
                                    placeholder="Your Phone Number"
                                    value={data.num}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.num && <p>error</p>}
                        </div>

                        <button class="ui fluid large teal submit button">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

SignupForm.propTypes =  {
    submit: propTypes.func.isRequired
};


export default SignupForm