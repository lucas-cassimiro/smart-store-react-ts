interface HeadProps {
  title: string
}

export function Head({ title }: HeadProps) {
  document.title = `Smart Store | ${title}`

  return null
}
