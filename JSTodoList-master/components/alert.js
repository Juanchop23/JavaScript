export default class Alert {
    constructor(alertId) {
        this.alert = document.getElementById(alertId);
    }

    //MOSTRAR ALERT
    show(message){
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }

    //ESCONDER ALERT
    hide(){
        this.alert.classList.add('d-none');
    }
}