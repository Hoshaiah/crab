import AddUser from "./AddUser"
import EmployeeWithdraw from "./EmployeeWithdraw"
import EmployeeDeposit from "./EmployeeDeposit"
import EmployeeTransfer from "./EmployeeTransfer"

function Employee(props){
    const {isEmployeePage, setIsEmployeePage, currentUser, setCurrentUser, setUsers, users, setIsLoginPage, usedAccountNumbers, setUsedAccountNumbers} = props

    const onExit = () => {
        setIsEmployeePage(false)
        setIsLoginPage(true)
    }

    const onDeleteUser = (user) =>{
        let usersCopy = {...users}
        delete usersCopy[user]
        setUsers(usersCopy)
        let usedAccountNumbersCopy = {...usedAccountNumbers}
        delete usedAccountNumbersCopy[users[user].accountNumber]
        setUsedAccountNumbers(usedAccountNumbersCopy)
    }
    if (isEmployeePage){
        return (
            <>
            <h1 onClick={onExit}>Exit</h1>
            <div id="employeeAccountActions">
                <h1>Main</h1>
                <h1>Add User</h1>
            </div>
            <div id="employeeMoneyActions">
                <div id="employeeWithdraw">
                    <h2>Withdraw</h2>
                    <EmployeeWithdraw
                        users = {users}
                        setUsers = {setUsers}
                    />
                </div>
                <div id="employeeDeposit">
                    Deposit
                    <EmployeeDeposit
                        users = {users}
                        setUsers = {setUsers}
                    />
                </div>
                <div id="employeeTransfer">
                    Transfer
                    <EmployeeTransfer
                        users = {users}
                        setUsers = {setUsers}
                    />
                </div>
            </div>
            <div id ="allUserAccounts">
                {Object.keys(users).map((key, index) => ( key=== "undefined" ? "" :
                    <div class="userRow">
                        <row>{users[key].accountNumber}</row>
                        <row>{users[key].username}</row>
                        <row>{users[key].firstName}</row>
                        <row>{users[key].lastName}</row>
                        <row>{users[key].wallet}</row>
                        <row onClick={()=> onDeleteUser(key)}>Delete</row>
                    </div>
                ))}
            </div>
            <AddUser
                users = {users}
                setUsers = {setUsers}
                usedAccountNumbers = {usedAccountNumbers}
                setUsedAccountNumbers = {setUsedAccountNumbers}
            />
            </>
        ) 
    } else {
        return (
            null
        )
    }
}

export default Employee