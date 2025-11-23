import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  const classes = ['card', className].filter(Boolean).join(' ')
  return <div className={classes}>{children}</div>
}

export default Card


