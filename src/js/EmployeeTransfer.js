import { useState } from "react"
import { Component, useRef } from "react/cjs/react.development"


function EmployeeTransfer(props) {
    const {users, setUsers} = props
    const transferFromLastName = useRef("")
    const transferFromFirstName = useRef("")
    const transferFromUsername = useRef("")
    const transferToLastName = useRef("")
    const transferToFirstName = useRef("")
    const transferToUsername = useRef("")
    const transferAmount = useRef(0)


    const onAccountNumberChangeFrom = (accountNumber) => {
        function emptyInputsFrom() {
            transferFromLastName.current.value = ""
            transferFromFirstName.current.value = ""
            transferFromUsername.current.value = ""
        }

        if(accountNumber.length ===6){
            let usersInversedCopy = {}
            let usernames = Object.keys(users)
            for (let i = 0; i< usernames.length; i++){
                let object = users[usernames[i]]
                let accNumber = object["accountNumber"]
                let username = object["username"]
                usersInversedCopy = {
                    ...usersInversedCopy,
                    [accNumber] : username
                }
            }
            if(accountNumber in usersInversedCopy) {
                let username = usersInversedCopy[accountNumber]
                console.log(users[username])
                transferFromLastName.current.value = users[username].lastName
                transferFromFirstName.current.value = users[username].firstName
                transferFromUsername.current.value = users[username].username
            } else {
                emptyInputsFrom()
            }

        } else {
            emptyInputsFrom()

        }
    }

    const onAccountNumberChangeTo = (accountNumber) => {
        function emptyInputsTo() {
            transferToLastName.current.value = ""
            transferToFirstName.current.value = ""
            transferToUsername.current.value = ""
        }

        if(accountNumber.length ===6){
            let usersInversedCopy = {}
            let usernames = Object.keys(users)
            for (let i = 0; i< usernames.length; i++){
                let object = users[usernames[i]]
                let accNumber = object["accountNumber"]
                let username = object["username"]
                usersInversedCopy = {
                    ...usersInversedCopy,
                    [accNumber] : username
                }
            }
            if(accountNumber in usersInversedCopy) {
                let username = usersInversedCopy[accountNumber]
                console.log(users[username])
                transferToLastName.current.value = users[username].lastName
                transferToFirstName.current.value = users[username].firstName
                transferToUsername.current.value = users[username].username
            } else {
                emptyInputsTo()
            }

        } else {
            emptyInputsTo()

        }
    }



    const onSubmit = (event) => {
        let amountToTransfer = transferAmount.current.value

        let usernameFrom = transferFromUsername.current.value
        let userObjectFrom = users[usernameFrom]
        let currentWalletFrom = userObjectFrom.wallet

        let usernameTo = transferToUsername.current.value
        let userObjectTo = users[usernameTo]
        let currentWalletTo = userObjectTo.wallet
        setUsers(
            {
                ...users,
                [usernameFrom] : {
                    ...userObjectFrom,
                    // "wallet": Number(1000)
                    "wallet": Number(currentWalletFrom)-Number(amountToTransfer)
                },
                [usernameTo] : {
                    ...userObjectTo,
                    // "wallet": Number(1000)
                    "wallet": Number(currentWalletTo)+Number(amountToTransfer)
                }
            }
        )
        console.log({
            currentWalletFrom,
            currentWalletTo,
            amountToTransfer
        })
    }
    return (
        <form>
            <h1> Transfer header</h1>
            <div id="addUserInputs">
                <label for="transferFromAccountNumber"></label>
                <input onChange={event => onAccountNumberChangeFrom(event.target.value)} type="text" id="transferFromAccountNumber" placeholder="Account Number"></input>
                <label for="transferFromUsername"></label>
                <input ref = {transferFromUsername} type="text" id="transferFromUsername" placeholder="Username"></input>
                <label for="transferFromFirstName"></label>
                <input ref = {transferFromFirstName} type="text" id="transferFromFirstName" placeholder="First Name"></input>
                <label for="transferFromAmount"></label>
                <input ref = {transferFromLastName} type="text" id="transferFromAmount" placeholder="Last Name"></input>
            </div>
            <div id="addUserInputs">
                <label for="transferToAccountNumber"></label>
                <input onChange={event => onAccountNumberChangeTo(event.target.value)} type="text" id="transferToAccountNumber" placeholder="Account Number"></input>
                <label for="transferToUsername"></label>
                <input ref = {transferToUsername} type="text" id="transferToUsername" placeholder="Username"></input>
                <label for="transferToFirstName"></label>
                <input ref = {transferToFirstName} type="text" id="transferToFirstName" placeholder="First Name"></input>
                <label for="transferToAmount"></label>
                <input ref = {transferToLastName} type="text" id="transferToAmount" placeholder="Last Name"></input>
            </div>
            <label for="transferFromAmount"></label>
            <input ref = {transferAmount} type="text" id="transferAmount" placeholder="Amount"></input>
            <div id="addUserButtons">
                <button onClick={e => onSubmit(e)}type="submit">Submit</button>
            </div>
        </form>
    )
}

export default EmployeeTransfer