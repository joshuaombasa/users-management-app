
interface Iprops {
    user: {
        name: string
        age: number
        note?: string
    }
}

export default function Profile({ user } : Iprops) {

    return (
        <div className="star--container">
            <h1 className="star--name">{user.name}</h1>
            <p className="star--age">{user.age}</p>
            <small className="star--details">{user.note}</small>
        </div>
    )
}