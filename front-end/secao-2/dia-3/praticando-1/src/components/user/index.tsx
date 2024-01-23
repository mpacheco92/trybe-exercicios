const user = {
    name: 'Mylher',
    lastName: 'Pacheco'
}

export default function User() {
  return <span>{user.name} {user.lastName}</span>;
}