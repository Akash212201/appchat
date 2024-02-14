const Message = ({ user, message, classs = "left" }) => {
    if (user) {
        return (
            <>
                <div className={"bg-gainsboro w-1/2 inline-block p-3 m-0 float-left bg-green-600 text-white rounded-lg mx-5 my-2"}>
                    {`${user} : ${message}`}
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={"bg-gainsboro w-1/2 inline-block p-3 m-0 float-right bg-rose-600 text-white rounded-lg mx-5 my-2"}>
                    {`You : ${message}`}
                </div>
            </>
        )
    }
}

export default Message
