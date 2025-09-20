import Data from"../data.json";
import PropsChild from "./PropsChild";
function PropsPage() {
    // const user1 = {name:"Rajaker", email:"rajaker@gmail.com", round:{65}}
    // const user1 = {name:"Arupa Code kora na", email:"arupa@gmail.com", round:{64}}
    return(
        <div className="container">
            <h1>PropsPage</h1>
            <div className="row g-3">
                <div className="col-lg-4">
                    <PropsChild name="Rajaker" email="rajaker@gmail.com" round={65}/>
                    {/* <PropsChild {...user1} */}
                </div>
                <div className="col-lg-4">
                    <PropsChild name="Arupa Code kora na" email="arupa@gmail.com" round={64}/>
                    {/* <PropsChild {...user2} */}
                </div>
            </div>
            <h1>Loop</h1>
            <div className="row g-3">
                    {
                        Data.map((item)=>
                <div key={item.id} className="col-lg-4">
                    <PropsChild name={item.name} email={item.email} round={item.round}/>
                        </div>
                        )
                    }
            </div>
        </div>
    )
}
export default PropsPage