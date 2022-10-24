// import styles from './styles/loggedInHome.module.css'

export default function LoggedInHome({ user }) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>{ user.name }</h1>
    </div>
  )
}