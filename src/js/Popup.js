import Deposit from "./Deposit";
import Withdraw from "./Withdraw";


function Popup (props){
    const {popupName, popupAction, setOverlayVisibility, setCurrentUser, currentUser} = props

    if (popupAction==="Withdraw"){
        return(
            <Withdraw
                popupName = {popupName}
                setOverlayVisibility = {setOverlayVisibility}
                setCurrentUser = {setCurrentUser}
                currentUser = {currentUser}
            />
        )
    } else if (popupAction === "Deposit") {
        return(
            <Deposit
                popupName = {popupName}
                setOverlayVisibility = {setOverlayVisibility}
                setCurrentUser = {setCurrentUser}
                currentUser = {currentUser}
            />
        )
    } else {
        return <></>
    }


}

export default Popup;