import {useState} from 'react'

const UseAlerts = () => {
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: 'danger'
    });

    const showAlert = ({msg, type = 'danger'}) => setAlert({show: true, msg, type});
    const hideAlert = () => setAlert({show: false, msg: "", type: "danger"});

  return {alert, showAlert, hideAlert};
}

export default UseAlerts;