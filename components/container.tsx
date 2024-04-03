type Props = {
    children:React.ReactNode;
}

const Container = ({children}:Props) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto xl:px-20 px-4 py-4">
        {children}
    </div>
  )
}

export default Container