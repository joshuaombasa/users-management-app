import Profile from "./Profile"

interface IProps {
    users: {
      name: string
      age: number
      note?: string
    }[]
  }

export default function Star({ users } : IProps) {

   

    const profilesJsx = users.map(user  => <Profile key={user.name} user={user} />)

    return (
        <>
         {profilesJsx}
        </>
    )
}