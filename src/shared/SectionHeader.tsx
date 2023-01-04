

type Props = {
    children: React.ReactNode;
}

const SectionHeader = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
        {children}
    </h1>
  )
}
export {SectionHeader}