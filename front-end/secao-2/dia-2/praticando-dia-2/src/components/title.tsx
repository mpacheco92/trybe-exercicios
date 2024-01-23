type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <h2>{ children }</h2>
}