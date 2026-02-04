

interface UserCardProps{
    name: string,
    email: string, 
    age?: number,
    onDelete: () => void

}


function UserCard({name, email, age, onDelete}: UserCardProps){

    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            {age && <p>Age: {age}</p>}
            <button onClick={onDelete}>Delete</button>
        </div>
    )


}


function App(){


    return(
        <div>

            <UserCard
             name="Jason"
             email="jel@gmail"
             age={23}
             onDelete={()=> console.log('deleted')}
            />
            <UserCard
             name="Lakshmi"
             email="jaylak408"
             age={25}
             onDelete={() => console.log('deleted')}
            />
            
        </div>
    )
}
export default App
