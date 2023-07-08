
interface TitleSectionProps {
  title: string;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <h2 className="mb-3">{title}</h2>
  )
}

