import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonLabel,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonButton
} from '@ionic/react';
import '@ionic/react/css/flex-utils.css';
import './Home.css';
import {useState} from "react";

const Home: React.FC = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");

    const saveHeight = (e: any) => {
        setHeight(e.target.value);
    }

    const saveWeight = (e: any) => {
        setWeight(e.target.value);
    }

    const calcBmi = () => {
        const heightNum = parseInt(height);
        const weightNum = parseInt(weight);
        let bmiClac = weightNum / Math.pow(heightNum/100, 2);

        bmiClac = Math.round(bmiClac);

        console.log(heightNum);
        console.log(weightNum);
        console.log(bmiClac);
        setBmi(bmiClac.toString());
    }

    return (
        <IonPage>
            <IonHeader id="bmiBanner">
                <h1>BMI Calculator</h1>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonRow className={"ion-justify-content-center"}>
                            <IonCol size={"4"}>
                                <IonLabel class={"ion-justify-content-center"}>Height (cms)</IonLabel>
                            </IonCol>
                            <IonCol size={"8"}>
                                <IonInput
                                    onIonInput={e => saveHeight(e)}
                                    class="ion-justify-content-center"
                                    className={"height-input"}
                                    accept="string"
                                    placeholder="ex: 180cm"></IonInput>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                    <IonItem>
                        <IonRow>
                            <IonCol size={"4"}>
                                <IonLabel class="ion-justify-content-center">Weight (kgs)</IonLabel>
                            </IonCol>
                            <IonCol size={"8"}>
                                <IonInput
                                    onIonInput={e => saveWeight(e)}
                                    class="ion-justify-content-center height-input"
                                    accept="string"
                                    placeholder="ex: 90 kgs"></IonInput>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                    <IonItem>
                        <IonRow>
                            <IonCol size={"5"}>
                                <IonLabel class="">BMI</IonLabel>
                            </IonCol>
                            <IonCol size={"7"}>
                                <IonInput class="ion-justify-content-center height-input" disabled={true}
                                          accept="string"
                                >{bmi}</IonInput>
                            </IonCol>

                        </IonRow>
                    </IonItem>
                </IonList>

                <IonRow>
                    <IonCol size={"3"}></IonCol>
                    <IonCol size={"6"}>
                        <IonToolbar>
                            <IonButton onClick={e => calcBmi()}>Calc</IonButton>
                            <IonButton fill={"outline"}>Reset</IonButton>
                        </IonToolbar>
                    </IonCol>
                    <IonCol size={"3"}></IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Home;
